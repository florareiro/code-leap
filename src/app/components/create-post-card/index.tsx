import { useState } from "react";
import { PostCreatedProps } from "../post-created-card";

export default function CreatePostCard({
  onPostCreate,
}: {
  onPostCreate: (post: PostCreatedProps) => void;
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreatePost = () => {
    const post: PostCreatedProps = {
      title,
      content,
    };
    onPostCreate(post);
    setTitle("");
    setContent("");
  };

  return (
    <main className="w-5/6 flex mx-auto my-4 rounded-lg border border-black px-8 py-5">
      <form className="w-full h-full">
        <h2 className="mb-3 font-bold text-xl">What's on your mind?</h2>
        <div className="my-3 flex flex-col">
          <label>Title</label>
          <input
            type="text"
            className="border border-black rounded-lg px-2 py-1"
            placeholder="Hello World"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="my-3 flex flex-col">
          <label>Content</label>
          <textarea
            className="border border-black rounded-lg px-2 py-1"
            placeholder="Content Here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-[#7695EC] hover:bg-blue-700 text-white font-bold py-1 rounded-lg px-4 focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleCreatePost}
          >
            Create
          </button>
        </div>
      </form>
    </main>
  );
}
