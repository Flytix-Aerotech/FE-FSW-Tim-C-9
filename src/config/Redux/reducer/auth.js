import { LOGIN, REGISTER } from "../action/actionTypes";

const user = JSON.parse(localStorage.getItem("token"));

const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null };

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: false,
        user: action.payload.user,
      };
    case REGISTER:
      return {
        ...state,
        isLoggedIn: false,
        user: action.payload.user,
      };

    // case GET_PROFILE:
    //   return {
    //     ...state,
    //     user: action.payload.data.profile,
    //     isLoggedIn: true,
    //   };
    // case UPDATE_PROFILE:
    //   return {
    //     ...state,
    //     user: action.payload.data,
    //     isLoggedIn: true,
    //   };
    default:
      return state;
  }
};

export default auth;
