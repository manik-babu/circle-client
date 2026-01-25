import PostCard from "@/components/ui/postCard";
import { Post } from "@/types";

export default function PostContainer({ posts }: { posts: Post[] }) {
    return (
        <div className="flex flex-col gap-4 mt-6">
            {posts.map((post: Post) => (
                <PostCard post={post} key={post.id} />
            ))}
        </div>
    );
}