import {
  clearAuthenticatedSession,
  isSameOriginRequest,
  jsonResponse,
} from "../_shared";

export async function POST(request: Request) {
  if (!isSameOriginRequest(request)) {
    return jsonResponse({ error: "Invalid request origin." }, 403);
  }
  return jsonResponse(
    { ok: true },
    200,
    { "Set-Cookie": await clearAuthenticatedSession(request) },
  );
}
