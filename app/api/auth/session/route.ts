import {
  getAuthenticatedStudent,
  jsonResponse,
  parsePortalState,
  publicStudent,
} from "../_shared";

export async function GET(request: Request) {
  const authenticated = await getAuthenticatedStudent(request);
  if (!authenticated) {
    return jsonResponse({ error: "No active student session." }, 401);
  }

  return jsonResponse({
    user: publicStudent(authenticated.student),
    portalState: parsePortalState(authenticated.student.portal_state),
  });
}
