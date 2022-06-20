export const CITY_DATA = 'CITY_DATA';
export const FORECAST = 'FORECAST';

export const actionCreator = type => {
	return payload => {
		return {
			type,
			payload,
		};
	};
};

export const addCityData = actionCreator(CITY_DATA);
export const addForecast = actionCreator(FORECAST);

