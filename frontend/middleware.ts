import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET
  })
  const publicPaths = path === "/" || path === "/signup";
  //const token = request.cookies.get("token")?.value || "";

  if (publicPaths && token) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }
  if (!publicPaths && !token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
}


export const config = {
  matcher: ["/", "/signup", "/dashboard"],
};
