import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("Middleware is Running at 420km/h");

  const authToken = request.cookies.get("MKauthtoken")?.value;

  if (
    request.nextUrl.pathname === "/api/login" ||
    request.nextUrl.pathname === "/api/user"
  ) {
    return;
  }

  const loggedInUserNotAccessPaths =
    request.nextUrl.pathname == "/login" ||
    request.nextUrl.pathname == "/signup";

  if (loggedInUserNotAccessPaths) {
    if (authToken) {
      return NextResponse.redirect(new URL("/profile/user", request.url));
    }
  } else {

  }
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/add-project",
    "/projects",
    "/profile/:path*",
    "/api/:path*",
  ],
};
