import { NextRequest, NextResponse } from "next/server";
import userService from "./services/user.service";

export async function proxy(request: NextRequest) {

    const session = await userService.getSession();
    if (session.data) {
        console.log("Redirect...")
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/login', '/signup']
}