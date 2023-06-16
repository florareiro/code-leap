import { IPost } from "../types/types";

const baseUrl = "https://dev.codeleap.co.uk/careers/";

export const getAllPosts = async (): Promise<IPost[]> => {
  const res = await fetch(`${baseUrl}`);
  const data = await res.json();
  const { results } = data;

  const posts: IPost[] = results.map(
    ({ id, username, created_datetime, title, content }: IPost) => ({
      id,
      username,
      created_datetime,
      title,
      content,
    })
  );
  return posts;
};

export const editPost = async (
  postId: number,
  updatedPost: IPost
): Promise<IPost> => {
  const res = await fetch(`${baseUrl}${postId}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPost),
  });

  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    throw new Error("Failed to edit post");
  }
};

export const deletePost = async (postId: number): Promise<void> => {
  const res = await fetch(`${baseUrl}${postId}/`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete post");
  }
};
