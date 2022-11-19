import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({ tasks: tasksReducer, user: userReducer });

export default rootReducer;
