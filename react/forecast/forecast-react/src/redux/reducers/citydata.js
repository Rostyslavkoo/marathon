import { ACTIONS } from '../actions';
const cityData = (state = {}, action) => {
	switch (action.type) {
		case ACTIONS.CITY_DATA:
			return action.payload;
		case ACTIONS.TOGGLE_FAVOURITE:
			return { ...state, isFavourite: !state.isFavourite };
		default:
			return state;
	}
};
export default cityData;
