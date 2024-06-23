import axios from "axios"; //used to make api calls

axios.defaults.withCredentials = true;
const API = axios.create({
  baseURL: "https://artfolio-backend-blond.vercel.app",
}); //points to backend routes

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const deletePost = (postId) =>
  API.delete(`/posts/delete-post/${postId}`);
export const editPost = (newData) => API.put("/posts/edit-post", newData);
export const createPost = (newPost) => API.post("/posts", newPost); //sends data
export const fetchAllPosts = () => API.get("/posts");
export const fetchPostsBySearch = (searchQuery) =>
  API.get(`/posts/search?searchQuery=${searchQuery || none}`);
export const fetchFilteredPosts = (category) => API.get(`/posts/${category}`);
export const fetchCreatorProfile = (creator) =>
  API.get(`/posts/creator/${creator}`);
