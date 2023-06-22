import { combineReducers } from "redux";
import authReducer from "../reducer/auth";
import ticketReducer from "../reducer/ticket";
import bookReducer from "../reducer/book";

export default combineReducers({
  authReducer,
  ticketReducer,
  bookReducer,
});
