import { getAllPosts } from "../../../../api/api";
import PostCreatedCard from "@/app/components/post";
import { useState } from "react";
import { useQuery } from "react-query";

export default function Feed() {
  const [loadedItems, setLoadedItems] = useState(10);
  const [hasMoreItems, setHasMoreItems] = useState(true);

  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery("posts", getAllPosts, {
    refetchInterval: 5000,
  });

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (isError) {
    return <p>Error: {(error as Error).message}</p>;
  }

  return (
    <>
      {posts?.map((post) => (
        <PostCreatedCard
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          username={post.username}
          created_datetime={post.created_datetime}
        />
      ))}
    </>
  );
}
