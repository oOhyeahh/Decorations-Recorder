import { ADD_RECORD } from "../actions/types";
const initialState = {
	records: [
		{
			round: 1,
			first: "Antidote Jewel 1",
			second: "Antidote Jewel 1",
			third: "Antidote Jewel 1"
		}
	]
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_RECORD:
			return {
				...state,
				records: state.records.concat(action.payload)
			};
		default:
			return state;
	}
};
