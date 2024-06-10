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
} from "../constants/actionTypes";

const initialState = {
  posts: [],
  isLoading: true,
};

const posts = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case STARTLOADING:
      return { ...state, isLoading: true };

    case ENDLOADING:
      return { ...state, isLoading: false };

    case CREATEPOST:
      return { ...state, payload };

    case FETCHALLPOSTS:
      return {
        ...state,
        posts: payload,
      };

    case FETCHFILTEREDPOSTS:
      return { ...state, posts: payload };

    default:
      return state;
  }
};

export default posts;
