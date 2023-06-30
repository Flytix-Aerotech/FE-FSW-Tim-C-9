import { ADD_BOOKING, ADD_BOOKING_ERROR, ADD_BOOKING_REQUEST, GET_BOOKING } from "../action/actionTypes";

const initialState = {
  book: [],
  isLoading: false,
  isSuccess: false,
};

const book = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      return {
        ...state,
        isLoading: false,
        book: action.payload.data,
        isSuccess: true,
      };
    case ADD_BOOKING_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_BOOKING_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    case GET_BOOKING:
      return {
        ...state,
        isLoading: false,
        book: action.payload.data,
      };
    default:
      return state;
  }
};

export default book;
