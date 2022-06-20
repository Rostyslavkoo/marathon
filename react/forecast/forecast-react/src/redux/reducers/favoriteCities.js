import { ACTIONS } from '../actions';
const favouriteCites = (state = [], action) => {

	switch (action.type) {
		case ACTIONS.ADD_FAVOURITE_CITIES:
			return [action.payload, ...state]
		case ACTIONS.DELETE_FAVOURITE_CITIES:
			return state.filter(city => city.id !== action.id)
		default:
			return state;
	}
};

export default favouriteCites;
