import { env } from "@/env";
import { cookies } from "next/headers"

const getSession = async () => {
    try {
        const cookieStore = await cookies();
        const session = await fetch(`${env.SERVER_URL}/api/auth/get-session`, {
            headers: {
                Cookie: cookieStore.toString()
            }
        }).then((res) => res.json());

        return { data: session, error: null };
    } catch (error) {
        console.log(error);
        return { data: null, error }
    }
}

const userService = {
    getSession,
}
export default userService;