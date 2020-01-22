import { combineReducers } from "redux";
import targetReducer from "./target";
import decorationReducer from "./decoration";
import recordReducer from "./record";

export default combineReducers({
	target: targetReducer,
	decoration: decorationReducer,
	record: recordReducer
});
