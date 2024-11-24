//reducers -> controllers
//function that accepts the state and the action
//then based on the action type do some logic
//state cannot be empty -> therefore, empty arr
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
  CLEARPOSTS,
} from "../constants/actionTypes";

const initialState = {
  posts: [],
  creator: null,
  isLoading: false,
  noOfPages: 2,
};

const posts = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case STARTLOADING:
      return { ...state, isLoading: true };

    case ENDLOADING:
      return { ...state, isLoading: false };

    case CREATEPOST:
      return { ...state, posts: [payload, ...state.posts] };

    case FETCHALLPOSTS:
      return {
        ...state,
        posts: [...state.posts, ...payload?.data],
        noOfPages: payload?.noOfPages,
      };

    case CLEARPOSTS:
      return { ...state, posts: [], noOfPages: null };

    case FETCHPOSTSBYSEARCH:
      return {
        ...state,
        posts: payload,
      };

    case UPDATEPOSTS:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload._id ? payload : post
        ),
      };

    case REMOVEDELETEDPOST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload),
      };

    case FETCHFILTEREDPOSTS:
      return { ...state, posts: payload };

    case FETCHCREATORPROFILE:
      return { ...state, creator: payload };

    default:
      return state;
  }
};

export default posts;
