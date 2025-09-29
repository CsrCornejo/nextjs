import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
//   // Example: Redirect to a specific page if the request is for the root path
  // if (request.nextUrl.pathname === "/profile") {
  //   return NextResponse.redirect(new URL("/hello", request.url));
  // }

  // Example: Add a custom header to the response
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
    }

    response.headers.set("X-Custom-Header", "Hello World");

  return response;
}