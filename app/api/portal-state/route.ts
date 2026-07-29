import { updateStudentPortalState } from "../../../db/account-store";
import {
  getAuthenticatedStudent,
  isSameOriginRequest,
  jsonResponse,
  readJsonBody,
  serializePortalState,
} from "../auth/_shared";

type PortalStatePayload = {
  portalState?: unknown;
};

async function savePortalState(request: Request) {
  if (!isSameOriginRequest(request)) {
    return jsonResponse({ error: "Invalid request origin." }, 403);
  }
  const authenticated = await getAuthenticatedStudent(request);
  if (!authenticated) {
    return jsonResponse({ error: "Sign in again to save this portal." }, 401);
  }

  const payload = await readJsonBody<PortalStatePayload>(request);
  const portalState = serializePortalState(payload?.portalState);
  if (portalState === null) {
    return jsonResponse({ error: "The saved portal is too large to store." }, 413);
  }

  const updatedAt = Date.now();
  await updateStudentPortalState(authenticated.student.id, portalState, updatedAt);
  return jsonResponse({ ok: true, updatedAt });
}

export const PUT = savePortalState;
export const POST = savePortalState;
