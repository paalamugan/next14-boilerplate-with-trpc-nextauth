import { type NextFetchEvent, NextResponse } from 'next/server';
import { type NextRequestWithAuth, withAuth } from 'next-auth/middleware';

import { createRouteMatcher } from './utils/routeMatcher';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/:locale/dashboard(.*)']);

const authMiddleware = withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.
  function onSuccess(_req) {
    // you can get a token from the request object(req.nextauth.token) and do something with it
    // In here, do any kind of logging or tracking here or redirect to a custom URL
  },
  {
    callbacks: {
      authorized: async ({ token }) => {
        // If a user is authenticated, the token will be present
        // and the user is authorized.
        return !!token?.id;
      },
    },
  }
);

export default function middleware(request: NextRequestWithAuth, event: NextFetchEvent) {
  if (isProtectedRoute(request)) return authMiddleware(request, event);
  return NextResponse.next();
}

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ['/((?!.+\\.[\\w]+$|_next|api|trpc).*)', '/'],
};
