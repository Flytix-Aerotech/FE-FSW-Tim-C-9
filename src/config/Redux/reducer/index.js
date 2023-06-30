import { combineReducers } from "redux";
import authReducer from "../reducer/auth";
import ticketReducer from "../reducer/ticket";
import bookReducer from "../reducer/book";
import paymentReducer from "../reducer/payment";
import historyReducer from "../reducer/history";

export default combineReducers({
  authReducer,
  ticketReducer,
  bookReducer,
  paymentReducer,
  historyReducer,
});
