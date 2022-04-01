import {
	showInfo,
	showDetails,
	showForecast,
	addToFavoriteUI,
	removeFavouriteUI,
} from './view.js';
import { UI_ELEMENTS, SERVER, FAVORITE_CITIES } from './constant.js';

UI_ELEMENTS.INPUT.addEventListener('keyup', event => {
	if (event.keyCode == 13) {
		showInfo(getJSON(SERVER.URL.WEATHER));
	}
});

UI_ELEMENTS.MAGNIFY.addEventListener('click', () => {
	showInfo(getJSON(SERVER.URL.WEATHER));
});
UI_ELEMENTS.TABS.BTN.DETAILS.addEventListener('click', () => {
	showDetails(SERVER.OUTPUT_DATA[0]);
});
UI_ELEMENTS.TABS.BTN.NOW.addEventListener('click', () => {
	showInfo(getJSON(SERVER.URL.WEATHER));
});
UI_ELEMENTS.TABS.BTN.FORECAST.addEventListener('click', () => {
	showForecast(SERVER.FORECAST_DATA);
});

function getCityName() {
	if (UI_ELEMENTS.INPUT.value) {
		return UI_ELEMENTS.INPUT.value;
	}
	return 'Lviv';
}
UI_ELEMENTS.TABS.NOW.FAVORITE_ICON.addEventListener('click', event => {
	if (isFavorite()) {
		removeFromFavorite();
	} else {
		addToFavorite();
	}
});

export function isFavorite() {
	const isExistCity = FAVORITE_CITIES.find(
		finded_city => finded_city.id === SERVER.OUTPUT_DATA[0].id
	);
	return isExistCity;
}
function resetInput() {
	UI_ELEMENTS.INPUT.value = '';
}

export function showFavouriteCity() {
	UI_ELEMENTS.INPUT.value = this.textContent;
	showInfo(getJSON(SERVER.URL.WEATHER));
	resetInput();
}

export function deleteFavouriteCity() {
	const removed_id = Number(this.id.split('-')[1]);
	const index = FAVORITE_CITIES.findIndex(
		finded_city => finded_city.id === removed_id
	);
	FAVORITE_CITIES.splice(index, 1);
	removeFavouriteUI(removed_id, removed_id === SERVER.OUTPUT_DATA[0].id);
}

function getJSON(data) {
	const cityName = getCityName();
	const url = `${data}?q=${cityName}&appid=${SERVER.API_KEY}`;
	return fetch(url)
		.then(response => {
			if (response.ok) {
				const json = response.json();
				return json;
			} else {
				alert('unknown city');
			}
		})
		.catch(alert);
}

function addToFavorite() {
	FAVORITE_CITIES.push({
		name: SERVER.OUTPUT_DATA[0].name,
		id: SERVER.OUTPUT_DATA[0].id,
	});
	addToFavoriteUI(SERVER.OUTPUT_DATA[0]);
}

export function removeFromFavorite() {
	const index = FAVORITE_CITIES.findIndex(
		finded_city => finded_city.id === SERVER.OUTPUT_DATA[0].id
	);
	FAVORITE_CITIES.splice(index, 1);
	removeFavouriteUI(SERVER.OUTPUT_DATA[0].id, true);
}

showInfo(getJSON(SERVER.URL.WEATHER));
SERVER.FORECAST_DATA = getJSON(SERVER.URL.FORECAST)

