import { createStore } from "redux";
import rootReducer from "./Reducer/index";

const initialState = {};

const chromeExtension =
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
	window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, initialState, chromeExtension);

export default store;
