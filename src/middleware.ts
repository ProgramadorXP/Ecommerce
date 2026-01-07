import { auth } from "@/src/auth";

export default auth(() => {
  // Logic here
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
