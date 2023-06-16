import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../redux/features/postsSlice";
import { RootState } from "@/app/redux/store/store";
import { setUsername as setUsernameAction } from "@/app/redux/features/userSlice";

export default function CreatePostCard() {
  const dispatch = useDispatch();
  const username = useSelector((state: RootState) => state.user);
  const [errorMessage, setErrorMessage] = useState("");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreatePost = async () => {
    const post = {
      title,
      content,
      username: username.username || "",
    };

    try {
      const response = await fetch("https://dev.codeleap.co.uk/careers/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });

      if (response.ok) {
        const createdPost = await response.json();
        dispatch(setUsernameAction(username));
        dispatch(createPost(createdPost));
        setTitle("");
        setContent("");
        setUsernameAction(username);

        console.log(createdPost);
      } else {
        console.error("Failed to create post:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  return (
    <main className="w-5/6 flex mx-auto my-6 rounded-2xl border border-[#999999] px-6 py-5">
      <form className="w-full h-full">
        <h2 className="mb-3 font-bold text-xl">
          What's on your mind
          {username.username ? `, ${username.username} ` : ""}?
        </h2>
        <div className="my-4 flex flex-col">
          <label>Title</label>
          <input
            type="text"
            className="border border-[#777777] rounded-lg px-2 py-2 my-1 "
            placeholder="Hello World"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="my-3 flex flex-col">
          <label>Content</label>
          <textarea
            className="border h-20 border-[#777777] rounded-lg my-1 px-2 py-1"
            placeholder="Content Here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="flex  justify-end">
          {title && content ? (
            <button
              className="bg-[#7695EC] hover:bg-blue-700 text-white font-bold py-1 rounded-lg my-2 px-8 focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleCreatePost}
            >
              Create
            </button>
          ) : (
            <button
              className="bg-gray-600 text-white font-bold py-1 rounded-lg my-2 px-8 focus:outline-none focus:shadow-outline"
              type="button"
              disabled
            >
              Create
            </button>
          )}
        </div>
      </form>
    </main>
  );
}
