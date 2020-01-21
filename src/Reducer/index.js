import { combineReducers } from "redux";
import targetReducer from "./target";

export default combineReducers({
	target: targetReducer
});
