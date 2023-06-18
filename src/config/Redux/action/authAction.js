import API from "../../Api/baseApi";
import SweatAlert from "../../SweetAlert";
import { LOGIN, REGISTER, RESET_PASSWORD } from "./actionTypes";

export const loginAction = (data, history) => {
  return async (dispatch) => {
    await API.post(`/auth/login`, data)
      .then((response) => {
        dispatch({ type: LOGIN, payload: response.data });
        SweatAlert(response.data.message, "success");
        history("/");
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        SweatAlert(message, "warning");
      });
  };
};

export const registerAction = (data, history) => {
  return async (dispatch) => {
    await API.post(`/auth/register`, data)
      .then((response) => {
        dispatch({ type: REGISTER, payload: response.data });
        SweatAlert(response.data.message, "success");
        history("/login");
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        SweatAlert(message, "warning");
      });
  };
};

export const resetPasswordAction = (data, history, username) => {
  return async (dispatch) => {
    await API.put(`/auth/reset-password/${username}`, data)
      .then((response) => {
        dispatch({ type: RESET_PASSWORD, payload: response.data });
        SweatAlert(response.data.message, "success");
        history("/login");
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        SweatAlert(message, "warning");
      });
  };
};
