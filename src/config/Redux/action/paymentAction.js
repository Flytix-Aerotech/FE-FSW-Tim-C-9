import API from "../../Api/baseApi";
import SweatAlert from "../../SweetAlert";
import { MAKE_PAYMENT, MAKE_PAYMENT_ERROR, MAKE_PAYMENT_REQUEST } from "./actionTypes";

export const makePaymentAction = (code, type, history) => {
  return async (dispatch) => {
    dispatch({ type: MAKE_PAYMENT_REQUEST });
    await API.post(`/payments?code=${code}&type=${type}`)
      .then((response) => {
        dispatch({ type: MAKE_PAYMENT, payload: response.data });
        localStorage.removeItem("timer");
        localStorage.removeItem("baby", code);
        localStorage.removeItem("adult", code);
        SweatAlert(response.data.message, "success");
        window.open(`${response.data.chargeResponse.actions[1].url}`, "_blank");
        setTimeout(() => {
          history("/payment/success");
        }, 5000);
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.msg) || error.msg || error.toString();
        dispatch({ type: MAKE_PAYMENT_ERROR });
        SweatAlert(message, "warning");
      });
  };
};
