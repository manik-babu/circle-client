import { Post } from "@/types";
import Image from "next/image";
import PostActionSection from "./postActionSection";

export default function PostCard({ post, key }: { post: Post; key?: string }) {
    return (
        <div id="main-post-container" className="flex p-4 dark:bg-card bg-card themering rounded-md flex-col" key={key || 1}>
            <div id="post-header" className="flex gap-2">
                <div className="border-4 rounded-full h-12 w-12 flex justify-center items-center overflow-hidden">
                    <Image src='/a.jpg' alt="Profile" width={48} height={48} />
                </div>
                <div>
                    <h1>{post.author.name}</h1>
                    <p>{post.createdAt}</p>
                </div>
            </div>
            <p className="my-6" >{post.caption}</p>
            <PostActionSection postId={post.id} postCounts={post._count} />
        </div>
    );
}