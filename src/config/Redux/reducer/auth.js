import { LOGIN, REGISTER, GET_PROFILE, UPDATE_PROFILE } from "../action/actionTypes";

const initialState = {
  user: [],
  isLoggedIn: !!localStorage.getItem("token"),
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
      };
    case REGISTER:
      return {
        ...state,
        isLoggedIn: false,
        user: action.payload.user,
      };

    case GET_PROFILE:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
      };

    case UPDATE_PROFILE:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export default auth;
