import {
  STARTLOADING,
  ENDLOADING,
  FETCHALLPOSTS,
  CREATEPOST,
  FETCHFILTEREDPOSTS,
  UPDATEPOSTS,
  REMOVEDELETEDPOST,
  FETCHCREATORPROFILE,
  FETCHPOSTSBYSEARCH,
} from "../constants/actionTypes";
import * as api from "../api";
import toast from "react-hot-toast";

export const deletePost = (postId, navigate) => async (dispatch) => {
  try {
    dispatch({ type: STARTLOADING });
    const { data } = await api.deletePost(postId);
    dispatch({ type: REMOVEDELETEDPOST, payload: data });
    dispatch({ type: ENDLOADING });
    toast.success("Successfully deleted!");
    navigate("/");
  } catch (err) {
    console.log(err);
  }
};

export const editPost = (newData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: STARTLOADING });
    const { data } = await api.editPost(newData);
    dispatch({ type: UPDATEPOSTS, payload: data });
    dispatch({ type: ENDLOADING });
    toast.success("Successfully edited!");
    navigate("/");
  } catch (err) {
    console.log(err);
  }
};

export const getFilteredPosts = (category) => async (dispatch) => {
  try {
    dispatch({ type: STARTLOADING });
    const { data } = await api.fetchFilteredPosts(category);
    dispatch({ type: FETCHFILTEREDPOSTS, payload: data }); //sends to reducer
    dispatch({ type: ENDLOADING });
  } catch (err) {
    console.log(err);
  }
};

export const getAllPosts = () => async (dispatch) => {
  try {
    dispatch({ type: STARTLOADING });
    const { data } = await api.fetchAllPosts();
    dispatch({ type: FETCHALLPOSTS, payload: data }); //sends to reducer
    dispatch({ type: ENDLOADING });
  } catch (err) {
    console.log(err);
  }
};

export const getPostsBySearch = (searchQuery, navigate) => async (dispatch) => {
  try {
    dispatch({ type: STARTLOADING });
    const { data } = await api.fetchPostsBySearch(searchQuery);
    dispatch({ type: FETCHPOSTSBYSEARCH, payload: data }); //sends to reducer
    dispatch({ type: ENDLOADING });
    navigate(`/posts/search?searchQuery=${searchQuery || "none"}`);
  } catch (err) {
    console.log(err);
  }
};

export const createPost = (newPost, navigate) => async (dispatch) => {
  try {
    dispatch({ type: STARTLOADING });
    const { data } = await api.createPost(newPost);
    dispatch({ type: CREATEPOST, payload: data });
    dispatch({ type: ENDLOADING });
    toast.success("Successfully created!");
    navigate("/");
  } catch (err) {
    console.log(err);
  }
};

export const savePost = (idz) => async (dispatch) => {
  try {
    const { data } = await api.savePost(idz);
    //sends to reducer
    toast.success("Post Saved!");
  } catch (err) {
    console.log(err);
  }
};

export const getCreatorProfile =
  ({ userId, navigate }) =>
  async (dispatch) => {
    try {
      toast("Please wait while fetching profile page");
      const { data } = await api.fetchCreatorProfile(userId);
      dispatch({ type: FETCHCREATORPROFILE, payload: data }); //sends to reducer

      navigate("/profile-page");
    } catch (err) {
      console.log(err);
    }
  };
