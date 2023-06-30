import API from "../../Api/baseApi";
import SweatAlert from "../../SweetAlert";
import { MAKE_PAYMENT, MAKE_PAYMENT_ERROR, MAKE_PAYMENT_REQUEST } from "./actionTypes";

export const makePaymentAction = (code, type, history) => {
  return async (dispatch) => {
    dispatch({ type: MAKE_PAYMENT_REQUEST });
    await API.post(`/payments?code=${code}&type=${type}`)
      .then((response) => {
        localStorage.removeItem("timer");
        dispatch({ type: MAKE_PAYMENT, payload: response.data });
        console.log(response.data);
        SweatAlert(response.data.message, "success");
        localStorage.removeItem("adult", code);
        localStorage.removeItem("baby", code);
        history(`/payment/success`);
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.msg) || error.msg || error.toString();
        dispatch({ type: MAKE_PAYMENT_ERROR });
        SweatAlert(message, "warning");
      });
  };
};
