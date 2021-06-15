import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import comments from "./comments_reducer";
import views from "./views_reducer";

const RootReducer = combineReducers({
  errors,
  session,
  comments,
  views,
});

export default RootReducer;
