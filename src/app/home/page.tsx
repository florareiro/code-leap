"use client";
import { useState } from "react";
import CreatePostCard from "../components/create-post-card";
import PostCreatedCard, {
  PostCreatedProps,
} from "../components/post-created-card";

export default function Home() {
  const [posts, setPosts] = useState<PostCreatedProps[]>([]);

  const handlePostCreate = (post: PostCreatedProps) => {
    setPosts([...posts, post]);
  };

  return (
    <main className="h-screen flex flex-col bg-white">
      <div className="h-20 bg-[#7695EC] flex justify-start px-10 items-center">
        <h1 className="text-white font-bold text-2xl">CodeLeap NetWork</h1>
      </div>
      <CreatePostCard onPostCreate={handlePostCreate} />
      {posts.map((post, index) => (
        <PostCreatedCard
          key={index}
          title={post.title}
          content={post.content}
        />
      ))}
    </main>
  );
}
