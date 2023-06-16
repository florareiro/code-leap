"use client";
import Feed from "../components/feed";
import CreatePostCard from "../components/create";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <main className="h-full flex flex-col bg-white">
      <div className="h-20 bg-[#7695EC]  flex justify-start  items-center  lg:px-36 px-12">
        <h1 className="text-white  font-bold text-2xl">CodeLeap NetWork</h1>
      </div>
      <CreatePostCard />
      <QueryClientProvider client={queryClient}>
        <Feed />
      </QueryClientProvider>
    </main>
  );
}
