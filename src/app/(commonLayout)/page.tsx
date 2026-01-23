import { postService } from "@/services/post.service";
import userService from "@/services/user.service";
import { Post } from "@/types";
import Image from "next/image";

export default async function Home() {
  const { data } = await userService.getSession();
  const { posts, error } = await postService.getPosts({ searchText: "" });
  console.log({ posts, error })
  return (
    <div className="flex gap-2 min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col gap-4 mt-6">
        {posts.map((post: Post, index: number) => (
          <div id="main-post-container" className="flex p-4 dark:bg-card bg-card themering rounded-md flex-col" key={index}>
            <div id="post-header" className="flex gap-2">
              <div className="border-4 rounded-full h-12 w-12 flex justify-center items-center overflow-hidden">
                <Image src='/a.jpg' alt="Profile" width={48} height={48} />
              </div>
              <div>
                <h1>{post.author.name}</h1>
                <p>{post.createdAt}</p>
              </div>
            </div>
            <h1 className="my-6" >{post.caption}</h1>
            <section id="post-status-box">
              <button>Like</button>
              <button>Comment</button>
              <button>Share</button>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
