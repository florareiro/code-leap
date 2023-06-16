import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Post {
  id?: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}

const postsSlice = createSlice({
  name: "posts",
  initialState: [] as Post[],
  reducers: {
    setPosts: (state, action: PayloadAction<Post>) => {
      state.push(action.payload);
    },
    createPost: (state, action: PayloadAction<Post>) => {
      state.push(action.payload);
    },
    deletePost: (state, action: PayloadAction<number>) => {
      const postId = action.payload;
      return state.filter((post) => post.id !== postId);
    },
    updatePost: (state, action: PayloadAction<Post>) => {
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
});

export const { setPosts, createPost, deletePost, updatePost } =
  postsSlice.actions;
export const selectPosts = (state: { posts: Post[] }) => state.posts;
export default postsSlice.reducer;
