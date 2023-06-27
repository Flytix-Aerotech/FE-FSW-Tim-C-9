import API from "../../Api/baseApi";
import SweatAlert from "../../SweetAlert";
import {
  LOGIN,
  REGISTER,
  RESET_PASSWORD,
  GET_PROFILE,
  UPDATE_PROFILE,
  SEND_OTP,
  VERIFY_OTP,
  VERIFY_ACCOUNT,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  SEND_OTP_REQUEST,
  VERIFY_ACCOUNT_REQUEST,
  VERIFY_OTP_REQUEST,
  RESET_PASSWORD_REQUEST,
  UPDATE_PROFILE_REQUEST,
  LOGOUT_REQUEST,
  LOGOUT,
  LOGIN_ERROR,
  REGISTER_ERROR,
  SEND_OTP_ERROR,
  VERIFY_OTP_ERROR,
  VERIFY_ACCOUNT_ERROR,
  RESET_PASSWORD_ERROR,
  UPDATE_PROFILE_ERROR,
} from "./actionTypes";

export const loginAction = (data, history) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    await API.post(`/auth/login`, data)
      .then((response) => {
        dispatch({ type: LOGIN, payload: response.data });
        localStorage.setItem("token", response.data.token);
        SweatAlert(response.data.msg, "success");
        history("/");
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.msg) || error.msg || error.toString();
        dispatch({ type: LOGIN_ERROR });
        SweatAlert(message, "warning");
      });
  };
};

export const registerAction = (data, history) => {
  return async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    await API.post(`/auth/register`, data)
      .then((response) => {
        dispatch({ type: REGISTER, payload: response.data });
        localStorage.setItem("email", response.data.user.email);
        SweatAlert(response.data.msg, "success");
        history("/verify");
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.msg) || error.msg || error.toString();
        dispatch({ type: REGISTER_ERROR });
        SweatAlert(message, "warning");
      });
  };
};

export const sendOtpAction = (data, history) => {
  return async (dispatch) => {
    dispatch({ type: SEND_OTP_REQUEST });
    await API.post(`/auth/send/email-otp`, data)
      .then((response) => {
        dispatch({ type: SEND_OTP, payload: response.data });
        SweatAlert(response.data.msg, "success");
        localStorage.setItem("email", response.data.user.email);
        history(`/otp`);
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.msg) || error.msg || error.toString();
        dispatch({ type: SEND_OTP_ERROR });
        SweatAlert(message, "warning");
      });
  };
};

export const verifyOtpAction = (data, history, email) => {
  return async (dispatch) => {
    dispatch({ type: VERIFY_OTP_REQUEST });
    await API.post(`/auth/verify-otp/${email}`, data)
      .then((response) => {
        dispatch({ type: VERIFY_OTP, payload: response.data });
        SweatAlert(response.data.msg, "success");
        localStorage.removeItem("timer");
        history(`/reset-password`);
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.msg) || error.msg || error.toString();
        dispatch({ type: VERIFY_OTP_ERROR });
        SweatAlert(message, "warning");
      });
  };
};

export const verifyAccountAction = (data, history, email) => {
  return async (dispatch) => {
    dispatch({ type: VERIFY_ACCOUNT_REQUEST });
    await API.post(`/auth/verify-account/${email}`, data)
      .then((response) => {
        dispatch({ type: VERIFY_ACCOUNT, payload: response.data });
        SweatAlert(response.data.msg, "success");
        localStorage.removeItem("timer");
        history(`/login`);
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.msg) || error.msg || error.toString();
        dispatch({ type: VERIFY_ACCOUNT_ERROR });
        SweatAlert(message, "warning");
      });
  };
};

export const resetPasswordAction = (data, history, email) => {
  return async (dispatch) => {
    dispatch({ type: RESET_PASSWORD_REQUEST });
    await API.put(`/auth/reset-password/${email}`, data)
      .then((response) => {
        dispatch({ type: RESET_PASSWORD, payload: response.data });
        SweatAlert(response.data.msg, "success");
        localStorage.removeItem("email");
        history("/login");
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.msg) || error.msg || error.toString();
        dispatch({ type: RESET_PASSWORD_ERROR });
        SweatAlert(message, "warning");
      });
  };
};

export const getProfileAction = () => {
  return async (dispatch) => {
    await API.get(`/auth/profile`)
      .then((response) => {
        dispatch({ type: GET_PROFILE, payload: response.data });
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.msg) || error.msg || error.toString();
        SweatAlert(message, "warning");
      });
  };
};

export const updateProfileAction = (data, history) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_PROFILE_REQUEST });
    await API.put(`/auth/profile`, data)
      .then((response) => {
        dispatch({ type: UPDATE_PROFILE, payload: response.data });
        SweatAlert(response.data.msg, "success");
        history("/user/profile");
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.msg) || error.msg || error.toString();
        dispatch({ type: UPDATE_PROFILE_ERROR });
        SweatAlert(message, "warning");
      });
  };
};

export const logoutAction = (history) => {
  return async (dispatch) => {
    dispatch({ type: LOGOUT_REQUEST });
    setTimeout(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("totalPassenger");
      dispatch({ type: LOGOUT });
      history("/login");
    }, 3000);
  };
};
