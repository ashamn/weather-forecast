import { NextResponse } from "next/server";
import {
  withMiddlewareAuthRequired,
  getSession,
} from "@auth0/nextjs-auth0/edge";

export default withMiddlewareAuthRequired(async function middleware(req) {
  const res = NextResponse.next();
  const { user } = await getSession(req, res);

  if (!user) {
    return NextResponse.rewrite("/login");
  }

  return res;
});

export const config = {
  matcher: ["/home", "/weather"],
};
