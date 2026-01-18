"use client"
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const session = authClient.useSession();
  console.log(session?.data?.user);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Home page </h1>
      <p>Hello, {session?.data?.user ? session?.data?.user.name : "Loading..."}</p>
    </div>
  );
}
