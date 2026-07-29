import {
  createStudentSession,
  deleteStudentSession,
  findStudentBySession,
  type SessionStudent,
} from "../../../db/account-store";

export const SESSION_COOKIE = "uofs_student_session";
// Cloudflare Workers supports PBKDF2 iteration counts up to 100,000.
export const PASSWORD_ITERATIONS = 100_000;
export const SESSION_DURATION_MS = 30 * 24 * 60 * 60 * 1000;
export const MAX_PORTAL_STATE_BYTES = 500_000;

const encoder = new TextEncoder();

export function normalizeEmail(value: unknown): string {
  return typeof value === "string" ? value.trim().toLowerCase() : "";
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

export function cleanDisplayName(value: unknown, email: string): string {
  const clean = typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "";
  return (clean || email.split("@")[0]).slice(0, 80);
}

export function isSameOriginRequest(request: Request): boolean {
  const origin = request.headers.get("origin");
  return !origin || origin === new URL(request.url).origin;
}

export function jsonResponse(
  body: unknown,
  status = 200,
  headers?: HeadersInit,
): Response {
  return Response.json(body, { status, headers });
}

export async function readJsonBody<T>(request: Request): Promise<T | null> {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_PORTAL_STATE_BYTES + 20_000) return null;
  try {
    return (await request.json()) as T;
  } catch {
    return null;
  }
}

export function serializePortalState(value: unknown): string | null {
  const state = value && typeof value === "object" && !Array.isArray(value) ? value : {};
  const serialized = JSON.stringify(state);
  return encoder.encode(serialized).byteLength <= MAX_PORTAL_STATE_BYTES
    ? serialized
    : null;
}

export function parsePortalState(value: string): Record<string, unknown> {
  try {
    const parsed = JSON.parse(value);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

export async function hashPassword(
  password: string,
  salt = randomBytes(16),
  iterations = PASSWORD_ITERATIONS,
): Promise<{ hash: string; salt: string; iterations: number }> {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );
  const bits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      hash: "SHA-256",
      salt,
      iterations,
    },
    key,
    256,
  );
  return {
    hash: bytesToBase64(new Uint8Array(bits)),
    salt: bytesToBase64(salt),
    iterations,
  };
}

export async function verifyPassword(
  password: string,
  expectedHash: string,
  encodedSalt: string,
  iterations: number,
): Promise<boolean> {
  const actual = await hashPassword(password, base64ToBytes(encodedSalt), iterations);
  return constantTimeEqual(actual.hash, expectedHash);
}

export async function createAuthenticatedSession(
  request: Request,
  studentId: string,
): Promise<{ cookie: string; token: string }> {
  const token = bytesToBase64Url(randomBytes(32));
  const tokenHash = await sha256(token);
  const now = Date.now();
  await createStudentSession(tokenHash, studentId, now + SESSION_DURATION_MS, now);
  return {
    token,
    cookie: sessionCookie(request, token, SESSION_DURATION_MS),
  };
}

export async function getAuthenticatedStudent(
  request: Request,
): Promise<{ student: SessionStudent; tokenHash: string } | null> {
  const token = readCookie(request.headers.get("cookie"), SESSION_COOKIE);
  if (!token) return null;
  const tokenHash = await sha256(token);
  const student = await findStudentBySession(tokenHash, Date.now());
  return student ? { student, tokenHash } : null;
}

export async function clearAuthenticatedSession(request: Request): Promise<string> {
  const token = readCookie(request.headers.get("cookie"), SESSION_COOKIE);
  if (token) {
    await deleteStudentSession(await sha256(token));
  }
  return sessionCookie(request, "", 0);
}

export function publicStudent(student: SessionStudent | { email: string; name: string }) {
  return { email: student.email, name: student.name };
}

function sessionCookie(request: Request, value: string, maxAgeMs: number): string {
  const secure = new URL(request.url).protocol === "https:" ? "; Secure" : "";
  return [
    `${SESSION_COOKIE}=${value}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    `Max-Age=${Math.floor(maxAgeMs / 1000)}`,
    secure.slice(2),
  ].filter(Boolean).join("; ");
}

function readCookie(cookieHeader: string | null, name: string): string | null {
  if (!cookieHeader) return null;
  for (const part of cookieHeader.split(";")) {
    const [key, ...value] = part.trim().split("=");
    if (key === name) return value.join("=") || null;
  }
  return null;
}

function randomBytes(length: number): Uint8Array {
  return crypto.getRandomValues(new Uint8Array(length));
}

async function sha256(value: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", encoder.encode(value));
  return bytesToBase64Url(new Uint8Array(digest));
}

function bytesToBase64(bytes: Uint8Array): string {
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

function bytesToBase64Url(bytes: Uint8Array): string {
  return bytesToBase64(bytes)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function base64ToBytes(value: string): Uint8Array {
  const binary = atob(value);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

function constantTimeEqual(first: string, second: string): boolean {
  const firstBytes = encoder.encode(first);
  const secondBytes = encoder.encode(second);
  let difference = firstBytes.length ^ secondBytes.length;
  const length = Math.max(firstBytes.length, secondBytes.length);
  for (let index = 0; index < length; index += 1) {
    difference |= (firstBytes[index] || 0) ^ (secondBytes[index] || 0);
  }
  return difference === 0;
}
