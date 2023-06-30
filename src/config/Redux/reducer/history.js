import { FILTER_HISTORY, GET_ALL_HISTORY, SEARCH_HISTORY } from "../action/actionTypes";

const initialState = {
  history: [],
  isLoading: true,
};

const ticket = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_HISTORY:
      return {
        ...state,
        isLoading: false,
        history: action.payload.data,
      };
    case FILTER_HISTORY:
      return {
        ...state,
        isLoading: false,
        history: action.payload.data,
      };
    case SEARCH_HISTORY:
      return {
        ...state,
        isLoading: false,
        history: action.payload.data,
      };
    default:
      return state;
  }
};

export default ticket;
