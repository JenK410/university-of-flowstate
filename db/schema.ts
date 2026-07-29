import { index, integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const students = sqliteTable(
  "students",
  {
    id: text("id").primaryKey(),
    email: text("email").notNull(),
    name: text("name").notNull(),
    passwordHash: text("password_hash").notNull(),
    passwordSalt: text("password_salt").notNull(),
    passwordIterations: integer("password_iterations").notNull(),
    portalState: text("portal_state").notNull().default("{}"),
    createdAt: integer("created_at").notNull(),
    updatedAt: integer("updated_at").notNull(),
  },
  (table) => [uniqueIndex("students_email_unique").on(table.email)],
);

export const studentSessions = sqliteTable(
  "student_sessions",
  {
    tokenHash: text("token_hash").primaryKey(),
    studentId: text("student_id")
      .notNull()
      .references(() => students.id, { onDelete: "cascade" }),
    expiresAt: integer("expires_at").notNull(),
    createdAt: integer("created_at").notNull(),
  },
  (table) => [
    index("student_sessions_student_idx").on(table.studentId),
    index("student_sessions_expiry_idx").on(table.expiresAt),
  ],
);

export const authAttempts = sqliteTable("auth_attempts", {
  email: text("email").primaryKey(),
  failedCount: integer("failed_count").notNull().default(0),
  blockedUntil: integer("blocked_until").notNull().default(0),
  updatedAt: integer("updated_at").notNull(),
});

export const accountDeletionTombstones = sqliteTable("account_deletion_tombstones", {
  email: text("email").primaryKey(),
  deletedAt: integer("deleted_at").notNull(),
});
