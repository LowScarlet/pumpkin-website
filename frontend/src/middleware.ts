// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /static (inside /public)
     * 5. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api|_next|static|[\\w-]+\\.\\w+).*)",
  ],
};

// This function can be marked `async` if using `await` inside
export default function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.endsWith('/auth')) {
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }
}