import { MAKE_PAYMENT, MAKE_PAYMENT_ERROR, MAKE_PAYMENT_REQUEST } from "../action/actionTypes";

const initialState = {
  payment: [],
  isLoading: true,
};

const ticket = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_PAYMENT:
      return {
        ...state,
        isLoading: false,
        payment: action.payload.data,
      };
    case MAKE_PAYMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case MAKE_PAYMENT_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default ticket;
