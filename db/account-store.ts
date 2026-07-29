import { env } from "cloudflare:workers";

export type StudentRecord = {
  id: string;
  email: string;
  name: string;
  password_hash: string;
  password_salt: string;
  password_iterations: number;
  portal_state: string;
  created_at: number;
  updated_at: number;
};

export type SessionStudent = Pick<
  StudentRecord,
  "id" | "email" | "name" | "portal_state" | "created_at" | "updated_at"
>;

type AuthAttempt = {
  email: string;
  failed_count: number;
  blocked_until: number;
  updated_at: number;
};

let initialization: Promise<void> | null = null;

export function getAccountDatabase(): D1Database {
  if (!env.DB) {
    throw new Error("Persistent student storage is unavailable.");
  }
  return env.DB;
}

export async function ensureAccountSchema(): Promise<void> {
  if (initialization) return initialization;
  const db = getAccountDatabase();
  initialization = db
    .batch([
      db.prepare(`
        CREATE TABLE IF NOT EXISTS students (
          id TEXT PRIMARY KEY NOT NULL,
          email TEXT NOT NULL,
          name TEXT NOT NULL,
          password_hash TEXT NOT NULL,
          password_salt TEXT NOT NULL,
          password_iterations INTEGER NOT NULL,
          portal_state TEXT NOT NULL DEFAULT '{}',
          created_at INTEGER NOT NULL,
          updated_at INTEGER NOT NULL
        )
      `),
      db.prepare("CREATE UNIQUE INDEX IF NOT EXISTS students_email_unique ON students (email)"),
      db.prepare(`
        CREATE TABLE IF NOT EXISTS student_sessions (
          token_hash TEXT PRIMARY KEY NOT NULL,
          student_id TEXT NOT NULL REFERENCES students(id) ON DELETE CASCADE,
          expires_at INTEGER NOT NULL,
          created_at INTEGER NOT NULL
        )
      `),
      db.prepare("CREATE INDEX IF NOT EXISTS student_sessions_student_idx ON student_sessions (student_id)"),
      db.prepare("CREATE INDEX IF NOT EXISTS student_sessions_expiry_idx ON student_sessions (expires_at)"),
      db.prepare(`
        CREATE TABLE IF NOT EXISTS auth_attempts (
          email TEXT PRIMARY KEY NOT NULL,
          failed_count INTEGER NOT NULL DEFAULT 0,
          blocked_until INTEGER NOT NULL DEFAULT 0,
          updated_at INTEGER NOT NULL
        )
      `),
      db.prepare(`
        CREATE TABLE IF NOT EXISTS account_deletion_tombstones (
          email TEXT PRIMARY KEY NOT NULL,
          deleted_at INTEGER NOT NULL
        )
      `),
    ])
    .then(() => undefined)
    .catch((error) => {
      initialization = null;
      throw error;
    });
  return initialization;
}

export async function findStudentByEmail(email: string): Promise<StudentRecord | null> {
  await ensureAccountSchema();
  return getAccountDatabase()
    .prepare("SELECT * FROM students WHERE email = ? LIMIT 1")
    .bind(email)
    .first<StudentRecord>();
}

export async function createStudent(record: StudentRecord): Promise<void> {
  await ensureAccountSchema();
  await getAccountDatabase()
    .prepare(`
      INSERT INTO students (
        id, email, name, password_hash, password_salt, password_iterations,
        portal_state, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)
    .bind(
      record.id,
      record.email,
      record.name,
      record.password_hash,
      record.password_salt,
      record.password_iterations,
      record.portal_state,
      record.created_at,
      record.updated_at,
    )
    .run();
}

export async function updateStudentPortalState(
  studentId: string,
  portalState: string,
  updatedAt: number,
): Promise<void> {
  await ensureAccountSchema();
  await getAccountDatabase()
    .prepare("UPDATE students SET portal_state = ?, updated_at = ? WHERE id = ?")
    .bind(portalState, updatedAt, studentId)
    .run();
}

export async function deleteStudent(studentId: string): Promise<void> {
  await ensureAccountSchema();
  await getAccountDatabase()
    .prepare("DELETE FROM students WHERE id = ?")
    .bind(studentId)
    .run();
}

export async function createStudentSession(
  tokenHash: string,
  studentId: string,
  expiresAt: number,
  createdAt: number,
): Promise<void> {
  await ensureAccountSchema();
  const db = getAccountDatabase();
  await db.batch([
    db
      .prepare("DELETE FROM student_sessions WHERE expires_at <= ?")
      .bind(createdAt),
    db
      .prepare("DELETE FROM student_sessions WHERE student_id = ?")
      .bind(studentId),
    db
      .prepare(`
        INSERT INTO student_sessions (token_hash, student_id, expires_at, created_at)
        VALUES (?, ?, ?, ?)
      `)
      .bind(tokenHash, studentId, expiresAt, createdAt),
  ]);
}

export async function findStudentBySession(
  tokenHash: string,
  now: number,
): Promise<SessionStudent | null> {
  await ensureAccountSchema();
  return getAccountDatabase()
    .prepare(`
      SELECT
        students.id,
        students.email,
        students.name,
        students.portal_state,
        students.created_at,
        students.updated_at
      FROM student_sessions
      INNER JOIN students ON students.id = student_sessions.student_id
      WHERE student_sessions.token_hash = ? AND student_sessions.expires_at > ?
      LIMIT 1
    `)
    .bind(tokenHash, now)
    .first<SessionStudent>();
}

export async function deleteStudentSession(tokenHash: string): Promise<void> {
  await ensureAccountSchema();
  await getAccountDatabase()
    .prepare("DELETE FROM student_sessions WHERE token_hash = ?")
    .bind(tokenHash)
    .run();
}

export async function getAuthAttempt(email: string): Promise<AuthAttempt | null> {
  await ensureAccountSchema();
  return getAccountDatabase()
    .prepare("SELECT * FROM auth_attempts WHERE email = ? LIMIT 1")
    .bind(email)
    .first<AuthAttempt>();
}

export async function recordFailedAuthAttempt(
  email: string,
  failedCount: number,
  blockedUntil: number,
  updatedAt: number,
): Promise<void> {
  await ensureAccountSchema();
  await getAccountDatabase()
    .prepare(`
      INSERT INTO auth_attempts (email, failed_count, blocked_until, updated_at)
      VALUES (?, ?, ?, ?)
      ON CONFLICT(email) DO UPDATE SET
        failed_count = excluded.failed_count,
        blocked_until = excluded.blocked_until,
        updated_at = excluded.updated_at
    `)
    .bind(email, failedCount, blockedUntil, updatedAt)
    .run();
}

export async function clearAuthAttempts(email: string): Promise<void> {
  await ensureAccountSchema();
  await getAccountDatabase()
    .prepare("DELETE FROM auth_attempts WHERE email = ?")
    .bind(email)
    .run();
}

export async function markAccountDeleted(
  email: string,
  deletedAt = Date.now(),
): Promise<void> {
  await ensureAccountSchema();
  await getAccountDatabase()
    .prepare(`
      INSERT INTO account_deletion_tombstones (email, deleted_at)
      VALUES (?, ?)
      ON CONFLICT(email) DO UPDATE SET deleted_at = excluded.deleted_at
    `)
    .bind(email, deletedAt)
    .run();
}

export async function hasAccountDeletionTombstone(email: string): Promise<boolean> {
  await ensureAccountSchema();
  const record = await getAccountDatabase()
    .prepare("SELECT email FROM account_deletion_tombstones WHERE email = ? LIMIT 1")
    .bind(email)
    .first<{ email: string }>();
  return Boolean(record);
}

export async function clearAccountDeletionTombstone(email: string): Promise<void> {
  await ensureAccountSchema();
  await getAccountDatabase()
    .prepare("DELETE FROM account_deletion_tombstones WHERE email = ?")
    .bind(email)
    .run();
}
