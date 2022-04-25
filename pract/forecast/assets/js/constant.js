
const UI_ELEMENTS = {
	INPUT: document.querySelector('#entered-city'),
	MAGNIFY: document.querySelector('.search_btn'),
	TABS: {
		BTN: {
			DETAILS: document.querySelector('.tab-details__btn'),
			NOW: document.querySelector('.tab-now__btn'),
			FORECAST: document.querySelector('.tab-forecast__btn'),
		},
		NOW: {
			TAB_MAIN: document.querySelector('.tab-now'),
			ICON: document.querySelector('#city-icon'),
			TEMPERATURE: document.querySelector('#city-temperature'),
			NAME: document.querySelector('#city-name'),
			FAVORITE_ICON: document.querySelector('#city-favorite'),
		},
		DETAILS: {
			TAB_MAIN: document.querySelector('.tab-details'),
			CITY_NAME: document.querySelector('.details-city_name'),
			TEMPERATURE: document.querySelector('.details-temperature'),
			FEELS_LIKE: document.querySelector('.details-feels_like'),
			WEATHER: document.querySelector('.details-weather'),
			SUNRISE: document.querySelector('.details-sunrise'),
			SUNSET: document.querySelector('.details-sunset'),
		},
		FORECAST: {
			TAB_MAIN: document.querySelector('.tab-forecast'),
			CITY_NAME: document.querySelector('.forecast-city_name'),
			INFO_BLOCKS: document.querySelectorAll('.info-block'),
		},
	},
	FAVOURITE_LIST: document.querySelector('#favorite-list'),
};
const SERVER = {
	URL: {
		WEATHER: 'https://api.openweathermap.org/data/2.5/weather',
		FORECAST: 'https://api.openweathermap.org/data/2.5/forecast',
	},
	API_KEY: 'f660a2fb1e4bad108d6160b7f58c555f',
	STORAGE_KEY: 'forecast_store',
	ICON: 'https://openweathermap.org/img/wn/',
	WEATHER_DATA: [],
	FORECAST_DATA: [],
	LOCALSTORAGE_DATA: [],
};
const FAVORITE_CITIES = [];
export { UI_ELEMENTS, SERVER, FAVORITE_CITIES };
