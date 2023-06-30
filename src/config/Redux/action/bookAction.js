import API from "../../Api/baseApi";
import SweatAlert from "../../SweetAlert";
import { ADD_BOOKING, ADD_BOOKING_ERROR, ADD_BOOKING_REQUEST, GET_BOOKING } from "./actionTypes";

export const addBookingAction = (data, history, id, adult, baby) => {
  return async (dispatch) => {
    dispatch({ type: ADD_BOOKING_REQUEST });
    await API.post(`/booking/${id}?adult=${adult}&baby=${baby}`, data)
      .then((response) => {
        localStorage.removeItem("timer");
        dispatch({ type: ADD_BOOKING, payload: response.data });
        SweatAlert(response.data.msg, "success");
        history(`/checkout/${id}/${response.data.data.newBooking.booking_code}`);
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.msg) || error.msg || error.toString();
        dispatch({ type: ADD_BOOKING_ERROR });
        SweatAlert(message, "warning");
      });
  };
};

export const getBookingAction = (code) => {
  return async (dispatch) => {
    await API.get(`/booking/pay/${code}`)
      .then((response) => {
        dispatch({ type: GET_BOOKING, payload: response.data });
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.msg) || error.msg || error.toString();
        SweatAlert(message, "warning");
      });
  };
};
