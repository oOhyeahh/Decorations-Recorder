import { ADD_TARGET, DELETE_TARGET } from "../actions/types";

const initialState = {
	targets: [],
  target: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TARGET:
      return {
        ...state,
        targets: state.targets.concat(action.payload)
      };    
    case DELETE_TARGET:
      return {
        ...state,
        targets: state.targets.splice(action.payload, 1)
      };      
    default:
      return state;
  }
}