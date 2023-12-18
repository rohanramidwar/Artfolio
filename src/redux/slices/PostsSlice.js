import { createSlice } from "@reduxjs/toolkit";

export const PostsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addPost } = PostsSlice.actions;
export default PostsSlice.reducer;
