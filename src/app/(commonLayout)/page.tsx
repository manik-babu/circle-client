import { postService } from "@/services/post.service";
import userService from "@/services/user.service";
import { Post } from "@/types";

export default async function Home() {
  const { data } = await userService.getSession();
  const { posts, error } = await postService.getPosts({ searchText: "" });
  console.log({ posts, error })
  return (
    <div className="flex gap-2 min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col gap-4">
        {posts.map((post: Post, index: number) => (
          <div key={index}>
            <h1>{post.author.name}</h1>
            <h1>{post.caption}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
