import { combineReducers } from "redux";
import targetReducer from "./target";
import decorationReducer from "./decoration"

export default combineReducers({
	target: targetReducer,
	decoration: decorationReducer
});
