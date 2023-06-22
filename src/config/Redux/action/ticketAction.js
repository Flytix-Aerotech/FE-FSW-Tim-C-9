import API from "../../Api/baseApi";
import SweatAlert from "../../SweetAlert";
import { GET_TICKET_BY_QUERY, FILTER_TICKET, GET_ALL_TICKETS, GET_BY_ID_TICKET } from "./actionTypes";

export const filterTicketAction = (data, history) => {
  return async (dispatch) => {
    await API.post(`/tickets/filter`, data)
      .then((response) => {
        dispatch({ type: FILTER_TICKET, payload: response.data });
        history(`/home?dd=${data.departure_date}&dl=${data.departure_location}&al=${data.arrival_location}&toc=${data.type_of_class}`);
      })
      .catch((error) => {
        SweatAlert("Please input a relevant data", "warning");
      });
  };
};

export const getTicketAction = (data) => {
  return async (dispatch) => {
    await API.get(`/tickets/search?dd=${data.departure_date}&dl=${data.departure_location}&al=${data.arrival_location}&toc=${data.type_of_class}`)
      .then((response) => {
        dispatch({ type: GET_TICKET_BY_QUERY, payload: response.data });
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.msg) || error.msg || error.toString();
        SweatAlert(message, "warning");
      });
  };
};

export const getAllTicketAction = () => {
  return async (dispatch) => {
    await API.get(`/tickets`)
      .then((response) => {
        dispatch({ type: GET_ALL_TICKETS, payload: response.data });
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.msg) || error.msg || error.toString();
        SweatAlert(message, "warning");
      });
  };
};

export const getByIdTicketAction = (id) => {
  return async (dispatch) => {
    await API.get(`/tickets/${id}`)
      .then((response) => {
        dispatch({ type: GET_BY_ID_TICKET, payload: response.data });
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.msg) || error.msg || error.toString();
        SweatAlert(message, "warning");
      });
  };
};
