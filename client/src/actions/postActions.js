import {
  FETCHALLPOSTS,
  STARTLOADING,
  ENDLOADING,
  CREATEPOST,
} from "../constants/actionTypes";
import * as api from "../api";

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

export const createPost = (newPost, navigate) => async (dispatch) => {
  try {
    dispatch({ type: STARTLOADING });
    const { data } = await api.createPost(newPost);
    dispatch({ type: CREATEPOST, payload: data });
    navigate("/");
    dispatch({ type: ENDLOADING });
  } catch (err) {
    console.log(err);
  }
};
