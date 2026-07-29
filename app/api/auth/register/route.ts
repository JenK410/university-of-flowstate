import {
  clearAccountDeletionTombstone,
  createStudent,
  findStudentByEmail,
  hasAccountDeletionTombstone,
  type StudentRecord,
} from "../../../../db/account-store";
import {
  cleanDisplayName,
  createAuthenticatedSession,
  hashPassword,
  isSameOriginRequest,
  isValidEmail,
  jsonResponse,
  normalizeEmail,
  parsePortalState,
  publicStudent,
  readJsonBody,
  serializePortalState,
} from "../_shared";

type RegistrationPayload = {
  email?: string;
  password?: string;
  name?: string;
  portalState?: unknown;
  legacyMigration?: boolean;
};

export async function POST(request: Request) {
  try {
    return await registerStudent(request);
  } catch (error) {
    console.error("Student account registration failed.", error);
    return jsonResponse(
      { error: "Student accounts are temporarily unavailable. Please try again shortly." },
      503,
    );
  }
}

async function registerStudent(request: Request) {
  if (!isSameOriginRequest(request)) {
    return jsonResponse({ error: "Invalid request origin." }, 403);
  }

  const payload = await readJsonBody<RegistrationPayload>(request);
  const email = normalizeEmail(payload?.email);
  const password = typeof payload?.password === "string" ? payload.password : "";
  if (!isValidEmail(email)) {
    return jsonResponse({ error: "Enter a valid email address." }, 400);
  }
  if (password.length < 6 || password.length > 128) {
    return jsonResponse({ error: "Use a password between 6 and 128 characters." }, 400);
  }
  if (await findStudentByEmail(email)) {
    return jsonResponse({ error: "That email already has a student account." }, 409);
  }
  if (payload?.legacyMigration && await hasAccountDeletionTombstone(email)) {
    return jsonResponse(
      {
        error: "This older browser account was deleted and will not be restored.",
        accountDeleted: true,
      },
      410,
    );
  }
  if (!payload?.legacyMigration) {
    await clearAccountDeletionTombstone(email);
  }

  const portalState = serializePortalState(payload?.portalState);
  if (portalState === null) {
    return jsonResponse({ error: "The saved portal is too large to store." }, 413);
  }

  const passwordRecord = await hashPassword(password);
  const now = Date.now();
  const student: StudentRecord = {
    id: crypto.randomUUID(),
    email,
    name: cleanDisplayName(payload?.name, email),
    password_hash: passwordRecord.hash,
    password_salt: passwordRecord.salt,
    password_iterations: passwordRecord.iterations,
    portal_state: portalState,
    created_at: now,
    updated_at: now,
  };

  try {
    await createStudent(student);
  } catch (error) {
    if (String(error).toLowerCase().includes("unique")) {
      return jsonResponse({ error: "That email already has a student account." }, 409);
    }
    throw error;
  }

  const session = await createAuthenticatedSession(request, student.id);
  return jsonResponse(
    {
      user: publicStudent(student),
      portalState: parsePortalState(student.portal_state),
    },
    201,
    { "Set-Cookie": session.cookie },
  );
}
