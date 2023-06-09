import { GET_ALL_HISTORY } from "../action/actionTypes";

const initialState = {
  history: [],
  filterDataHistory: [],
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
    default:
      return state;
  }
};

export default ticket;
