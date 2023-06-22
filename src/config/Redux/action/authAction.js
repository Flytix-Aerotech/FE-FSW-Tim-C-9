import API from "../../Api/baseApi";
import SweatAlert from "../../SweetAlert";
import { LOGIN, REGISTER, RESET_PASSWORD, GET_PROFILE, UPDATE_PROFILE } from "./actionTypes";

export const loginAction = (data, history) => {
  return async (dispatch) => {
    await API.post(`/auth/login`, data)
      .then((response) => {
        dispatch({ type: LOGIN, payload: response.data });
        localStorage.setItem("token", response.data.token);
        SweatAlert(response.data.msg, "success");
        history("/");
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.msg) || error.msg || error.toString();
        SweatAlert(message, "warning");
      });
  };
};

export const registerAction = (data, history) => {
  return async (dispatch) => {
    await API.post(`/auth/register`, data)
      .then((response) => {
        dispatch({ type: REGISTER, payload: response.data });
        SweatAlert(response.data.msg, "success");
        history("/login");
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.msg) || error.msg || error.toString();
        SweatAlert(message, "warning");
      });
  };
};

export const resetPasswordAction = (data, history, username) => {
  return async (dispatch) => {
    await API.put(`/auth/reset-password/${username}`, data)
      .then((response) => {
        dispatch({ type: RESET_PASSWORD, payload: response.data });
        SweatAlert(response.data.msg, "success");
        history("/login");
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.msg) || error.msg || error.toString();
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
    await API.put(`/auth/profile`, data)
      .then((response) => {
        dispatch({ type: UPDATE_PROFILE, payload: response.data });
        SweatAlert(response.data.msg, "success");
        history("/user/profile");
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.msg) || error.msg || error.toString();
        SweatAlert(message, "warning");
      });
  };
};
