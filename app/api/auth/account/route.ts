import {
  deleteStudent,
  findStudentByEmail,
  markAccountDeleted,
} from "../../../../db/account-store";
import {
  clearAuthenticatedSession,
  getAuthenticatedStudent,
  isSameOriginRequest,
  jsonResponse,
  readJsonBody,
  verifyPassword,
} from "../_shared";

type DeleteAccountPayload = {
  password?: string;
};

export async function DELETE(request: Request) {
  if (!isSameOriginRequest(request)) {
    return jsonResponse({ error: "Invalid request origin." }, 403);
  }

  const authenticated = await getAuthenticatedStudent(request);
  if (!authenticated) {
    return jsonResponse({ error: "Sign in again before deleting this account." }, 401);
  }

  const payload = await readJsonBody<DeleteAccountPayload>(request);
  const password = typeof payload?.password === "string" ? payload.password : "";
  const student = await findStudentByEmail(authenticated.student.email);
  if (
    !student
    || !await verifyPassword(
      password,
      student.password_hash,
      student.password_salt,
      student.password_iterations,
    )
  ) {
    return jsonResponse({ error: "That password does not match this account." }, 401);
  }

  await deleteStudent(student.id);
  await markAccountDeleted(student.email);
  return jsonResponse(
    { ok: true },
    200,
    { "Set-Cookie": await clearAuthenticatedSession(request) },
  );
}
