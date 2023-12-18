import { configureStore } from "@reduxjs/toolkit";
import PostsSlice from "./Slices/PostsSlice";
import CartSlice from "./slices/CartSlice";

export const store = configureStore({
  reducer: {
    posts: PostsSlice,
    cart: CartSlice,
  },
});
