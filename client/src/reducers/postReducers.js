//reducers -> controllers
//function that accepts the state and the action
//then based on the action type do some logic
//state cannot be empty -> therefore, empty arr
import {
  CREATEPOST,
  ENDLOADING,
  FETCHALLPOSTS,
  FETCHPOST,
  STARTLOADING,
  FETCHARTIST,
} from "../constants/actionTypes";

const initialState = {
  posts: [],
  isLoading: true,
  post: null,
  artist: null,
};

const posts = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case STARTLOADING:
      return { ...state, isLoading: true };

    case ENDLOADING:
      return { ...state, isLoading: false };

    case FETCHALLPOSTS:
      return {
        ...state,
        posts: payload,
      };

    case FETCHPOST:
      return { ...state, post: payload };

    case FETCHARTIST:
      return { ...state, posts: [], artist: payload };

    case CREATEPOST:
      return { ...state, payload };

    default:
      return state;
  }
};

export default posts;
