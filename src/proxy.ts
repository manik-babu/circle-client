import { NextRequest, NextResponse } from "next/server";
import userService from "./services/user.service";

export async function proxy(request: NextRequest) {
    const path = request.nextUrl.pathname;

    const session = await userService.getSession();

    // Check user has the session or not
    if (session.data && (path.startsWith('/login') || path.startsWith('/signup'))) {
        return NextResponse.redirect(new URL('/', request.url));
    }


    return NextResponse.next();
}

export const config = {
    matcher: ['/login', '/signup']
}