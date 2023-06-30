import API from "../../Api/baseApi";
import SweatAlert from "../../SweetAlert";
import { GET_ALL_HISTORY, FILTER_HISTORY, SEARCH_HISTORY } from "./actionTypes";

export const getAllHistoryAction = () => {
  return async (dispatch) => {
    await API.get(`/histories`)
      .then((response) => {
        dispatch({ type: GET_ALL_HISTORY, payload: response.data });
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.msg) || error.msg || error.toString();
        SweatAlert(message, "warning");
      });
  };
};

export const filterHistoryAction = (start, end) => {
  return async (dispatch) => {
    await API.get(`/filter?start=${start}&end=${end}`)
      .then((response) => {
        dispatch({ type: FILTER_HISTORY, payload: response.data });
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.msg) || error.msg || error.toString();
        SweatAlert(message, "warning");
      });
  };
};

export const searchHistoryAction = (code) => {
  return async (dispatch) => {
    await API.get(`/search?code=${code}`)
      .then((response) => {
        dispatch({ type: SEARCH_HISTORY, payload: response.data });
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.msg) || error.msg || error.toString();
        SweatAlert(message, "warning");
      });
  };
};
