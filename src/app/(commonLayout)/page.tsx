import userService from "@/services/user.service";

export default async function Home() {
  const { data } = await userService.getSession();
  return (
    <div className="flex gap-2 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Home page </h1>
      <p>Hello, {data?.user ? data?.user.name : "Loading..."}</p>
    </div>
  );
}
