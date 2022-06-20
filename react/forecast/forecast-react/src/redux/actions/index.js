export const ACTIONS = {
	CITY_DATA: 'CITY_DATA',
	TOGGLE_FAVOURITE: 'TOGGLE_FAVOURITE',
	FORECAST: 'FORECAST',
	ADD_FAVOURITE_CITIES: 'ADD_FAVOURITE_CITIES',
	DELETE_FAVOURITE_CITIES: 'DELETE_FAVOURITE_CITIES',
};

export const actionCreator = (type, key_name) => {
	return payload => {
		return {
			type,
			[key_name]: payload,
		};
	};
};

export const addCityData = actionCreator(ACTIONS.CITY_DATA, 'payload');
export const toggleFavourite = actionCreator(ACTIONS.TOGGLE_FAVOURITE, 'id');
export const addFavouriteCities = actionCreator(
	ACTIONS.ADD_FAVOURITE_CITIES,
	'payload'
);
export const deleteFavouriteCities = actionCreator(
	ACTIONS.DELETE_FAVOURITE_CITIES,
	'id'
);
export const addForecast = actionCreator(ACTIONS.FORECAST, 'payload');
