import { env } from "@/env"

const SERVER_URL = env.SERVER_URL;

const getPosts = async ({ searchText }: { searchText?: string }) => {
    try {
        const url = new URL(`${SERVER_URL}/api/post`);

        if (searchText) {
            url.searchParams.append("searchText", searchText);
        }
        const res = await fetch(url, { cache: "no-store" });
        const result = await res.json();

        if (!result.ok) {
            return {
                posts: null,
                error: result
            }
        }
        else {
            return {
                posts: result.data,
                error: null
            }
        }
    } catch (error) {
        console.log(error);
        return {
            posts: null,
            error: {
                message: "Something went wrong!"
            }
        }
    }
}

export const postService = {
    getPosts,
}