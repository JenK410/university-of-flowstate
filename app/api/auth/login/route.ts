import {
  clearAuthAttempts,
  findStudentByEmail,
  getAuthAttempt,
  recordFailedAuthAttempt,
} from "../../../../db/account-store";
import {
  createAuthenticatedSession,
  hashPassword,
  isSameOriginRequest,
  jsonResponse,
  normalizeEmail,
  parsePortalState,
  publicStudent,
  readJsonBody,
  verifyPassword,
} from "../_shared";

type LoginPayload = {
  email?: string;
  password?: string;
};

const MAX_FAILED_ATTEMPTS = 8;
const BLOCK_DURATION_MS = 15 * 60 * 1000;

export async function POST(request: Request) {
  if (!isSameOriginRequest(request)) {
    return jsonResponse({ error: "Invalid request origin." }, 403);
  }

  const payload = await readJsonBody<LoginPayload>(request);
  const email = normalizeEmail(payload?.email);
  const password = typeof payload?.password === "string" ? payload.password : "";
  const now = Date.now();
  const attempt = email ? await getAuthAttempt(email) : null;
  if (attempt && attempt.blocked_until > now) {
    return jsonResponse(
      { error: "Too many attempts. Wait 15 minutes before trying again." },
      429,
    );
  }

  const student = email ? await findStudentByEmail(email) : null;
  const matches = student
    ? await verifyPassword(
        password,
        student.password_hash,
        student.password_salt,
        student.password_iterations,
      )
    : await hashPassword(password || "invalid-password", undefined, 25_000).then(() => false);

  if (!student || !matches) {
    if (email) {
      const failedCount = (attempt?.failed_count || 0) + 1;
      await recordFailedAuthAttempt(
        email,
        failedCount >= MAX_FAILED_ATTEMPTS ? 0 : failedCount,
        failedCount >= MAX_FAILED_ATTEMPTS ? now + BLOCK_DURATION_MS : 0,
        now,
      );
    }
    return jsonResponse(
      { error: "I could not find that email/password combination." },
      401,
    );
  }

  await clearAuthAttempts(email);
  const session = await createAuthenticatedSession(request, student.id);
  return jsonResponse(
    {
      user: publicStudent(student),
      portalState: parsePortalState(student.portal_state),
    },
    200,
    { "Set-Cookie": session.cookie },
  );
}
