import {
  LOGIN,
  REGISTER,
  GET_PROFILE,
  UPDATE_PROFILE,
  SEND_OTP,
  VERIFY_OTP,
  VERIFY_ACCOUNT,
  RESET_PASSWORD,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  SEND_OTP_REQUEST,
  VERIFY_OTP_REQUEST,
  VERIFY_ACCOUNT_REQUEST,
  RESET_PASSWORD_REQUEST,
  UPDATE_PROFILE_REQUEST,
  LOGOUT,
  LOGOUT_REQUEST,
  LOGIN_ERROR,
  REGISTER_ERROR,
  SEND_OTP_ERROR,
  VERIFY_OTP_ERROR,
  VERIFY_ACCOUNT_ERROR,
  RESET_PASSWORD_ERROR,
  UPDATE_PROFILE_ERROR,
} from "../action/actionTypes";

const initialState = {
  user: [],
  isLoggedIn: !!localStorage.getItem("token"),
  isLoading: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        isLoading: false,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
      };

    case REGISTER:
      return {
        ...state,
        isLoggedIn: false,
        user: action.payload.user,
        isLoading: false,
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: true,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
      };

    case SEND_OTP:
      return {
        ...state,
        isLoggedIn: false,
        user: action.payload.user,
        isLoading: false,
      };
    case SEND_OTP_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: true,
      };
    case SEND_OTP_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
      };

    case VERIFY_OTP:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
      };
    case VERIFY_OTP_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: true,
      };
    case VERIFY_OTP_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
      };

    case VERIFY_ACCOUNT:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
      };
    case VERIFY_ACCOUNT_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: true,
      };
    case VERIFY_ACCOUNT_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
      };

    case RESET_PASSWORD:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
      };
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: true,
      };
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
      };

    case GET_PROFILE:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        isLoading: false,
      };

    case UPDATE_PROFILE:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
      };
    case UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: true,
      };
    case UPDATE_PROFILE_ERROR:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default auth;
