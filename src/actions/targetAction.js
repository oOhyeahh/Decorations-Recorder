import { ADD_TARGET, DELETE_TARGET } from "../actions/types";

let targetId = 0;
export const addDecortation = decortation => {
	return {
		type: ADD_TARGET,
		payload: { id: targetId + 1, description: decortation }
	};
};

export const deleteDecortation = id => {
	return {
		type: DELETE_TARGET,
		payload: id
	};
};
