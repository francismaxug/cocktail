import { NextResponse } from "next/server";

//setting normal middleware
// export async function middleware() {
//   console.log("hello world!");
//   return Response.json({ msg: "hello world!" });
// }
// export const config = {
//   matcher: "/about",
// };

//setting middleware with config to match specific route and to provide a route
export async function middleware(request: Request) {
  console.log("hello world!");
  return NextResponse.redirect(new URL("/", request.url));
}


//In this example, the middleware will only run for the /about route and all pages will be redirected to the root URL.
export const config = {
  matcher: ["/about/:path*"],
};
