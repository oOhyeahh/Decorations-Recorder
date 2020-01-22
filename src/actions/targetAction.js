import { ADD_TARGET, DELETE_TARGET, ADD_RECORD } from "../actions/types";

export const addDecortation = description => {
	return {
		type: ADD_TARGET,
		payload: description
	};
};

export const deleteDecortation = id => {
	return {
		type: DELETE_TARGET,
		payload: id
	};
};

export const addRecord = record => {
	return {
		type: ADD_RECORD,
		payload: record
	}
}