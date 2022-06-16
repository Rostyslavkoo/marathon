export const CITY_DATA = 'CITY_DATA';
export const FORECAST = 'FORECAST';

export function addCityData(payload) {
	return {
		type: CITY_DATA,
		cityData: payload,
	};
}
export function addForecast(payload) {
	return {
		type: FORECAST,
		forecast: payload,
	};
}
