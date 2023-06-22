import { FILTER_TICKET, GET_ALL_TICKETS, GET_TICKET_BY_QUERY } from "../action/actionTypes";

const initialState = {
  ticket: [],
  isLoading: true,
};

const book = (state = initialState, action) => {
  switch (action.type) {
    // case FILTER_TICKET:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     ticket: action.payload.data,
    //   };
    // case GET_TICKET_BY_QUERY:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     ticket: action.payload.data,
    //   };
    // case GET_ALL_TICKETS:
    //   return {
    //     ...state,
    //     isLoggedIn: false,
    //     ticket: action.payload.data,
    //   };
    default:
      return state;
  }
};

export default book;
