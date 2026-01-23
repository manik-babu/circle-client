import PostContainer from "@/components/modules/post/PostContainer";
import { postService } from "@/services/post.service";

export default async function Home() {
  const { posts, error } = await postService.getPosts({ searchText: "" });
  console.log({ posts, error })
  return (
    <div className="flex gap-2 min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">
      <PostContainer posts={posts} />
    </div>
  );
}
