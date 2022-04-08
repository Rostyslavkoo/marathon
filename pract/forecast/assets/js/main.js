import {
	showNOW,
	showDETAILS,
	showFORECAST,
	addToFavoriteUI,
	removeFavouriteUI,
} from './view.js';

import { UI_ELEMENTS, SERVER, FAVORITE_CITIES } from './constant.js';
import { setItemToStore } from './store.js';

SERVER.FORECAST_DATA = await getJSON(SERVER.URL.FORECAST);
SERVER.WEATHER_DATA = await getJSON(SERVER.URL.WEATHER);

setChosenTab();

// showNOW(SERVER.WEATHER_DATA);

UI_ELEMENTS.TABS.NOW.FAVORITE_ICON.addEventListener('click', () => {
	const isExistCity = FAVORITE_CITIES.find(
		finded_city => finded_city.id === SERVER.WEATHER_DATA.id
	);
	if (isExistCity) {
		removeFromFavorite();
	} else {
		addToFavorite();
	}
});

UI_ELEMENTS.INPUT.addEventListener('keyup', async event => {
	if (event.keyCode == 13) {
		if (await getJSON(SERVER.URL.WEATHER)) {
			SERVER.WEATHER_DATA = await getJSON(SERVER.URL.WEATHER);
			SERVER.FORECAST_DATA = await getJSON(SERVER.URL.FORECAST);
			setItemToStore('city_name', SERVER.WEATHER_DATA.name);
		}
		showNOW(SERVER.WEATHER_DATA);
	}
});

UI_ELEMENTS.MAGNIFY.addEventListener('click', async () => {
	if (await getJSON(SERVER.URL.WEATHER)) {
		SERVER.WEATHER_DATA = await getJSON(SERVER.URL.WEATHER);
		SERVER.FORECAST_DATA = await getJSON(SERVER.URL.FORECAST);
		setItemToStore('city_name', SERVER.WEATHER_DATA.name);
	}
	showNOW(SERVER.WEATHER_DATA);
});

UI_ELEMENTS.TABS.BTN.NOW.addEventListener('click', async () => {
	showNOW(SERVER.WEATHER_DATA);
});

UI_ELEMENTS.TABS.BTN.DETAILS.addEventListener('click', () => {
	showDETAILS(SERVER.WEATHER_DATA);
});

UI_ELEMENTS.TABS.BTN.FORECAST.addEventListener('click', () => {
	showFORECAST(SERVER.FORECAST_DATA);
});

export async function showFavouriteCity() {
	document.querySelectorAll('.info-block').forEach(e => e.remove());
	UI_ELEMENTS.INPUT.value = '';
	setItemToStore('city_name', this.textContent);
	showNOW(await getJSON(SERVER.URL.WEATHER, this.textContent));
}

export function deleteAddedCity() {
	const removed_id = Number(this.id.split('-')[1]);
	const index = FAVORITE_CITIES.findIndex(
		finded_city => finded_city.id === removed_id
	);
	FAVORITE_CITIES.splice(index, 1);

	setItemToStore('favorite_city', FAVORITE_CITIES);

	removeFavouriteUI(removed_id, removed_id === SERVER.WEATHER_DATA.id);
}

function addToFavorite() {
	FAVORITE_CITIES.push({
		name: SERVER.WEATHER_DATA.name,
		id: SERVER.WEATHER_DATA.id,
	});
	setItemToStore('favorite_city', FAVORITE_CITIES);
	addToFavoriteUI(SERVER.WEATHER_DATA);
}

export function removeFromFavorite() {
	const index = FAVORITE_CITIES.findIndex(
		finded_city => finded_city.id === SERVER.WEATHER_DATA.id
	);
	FAVORITE_CITIES.splice(index, 1);
	setItemToStore('favorite_city', FAVORITE_CITIES);
	removeFavouriteUI(SERVER.WEATHER_DATA.id, true);
}

function getCityName(city_name) {
	if (city_name) {
		return city_name;
	}
	if (UI_ELEMENTS.INPUT.value) {
		return UI_ELEMENTS.INPUT.value;
	}
	return SERVER.LOCALSTORAGE_DATA.city_name;
}

async function getJSON(data, city_name = null) {
	const cityName = getCityName(city_name);
	const url = `${data}?q=${cityName}&appid=${SERVER.API_KEY}`;
	try {
		const res = await (await fetch(url)).json();
		if (res.cod == 404) {
			alert(res.message);
			return null;
		}
		return res;
	} catch (e) {
		alert(e);
	}
}

function setChosenTab() {
	switch (SERVER.LOCALSTORAGE_DATA.chosen_tab) {
		case 'NOW':
			showNOW(SERVER.WEATHER_DATA);
			break;
		case 'DETAILS':
			showDETAILS(SERVER.WEATHER_DATA);
			break;
		case 'FORECAST':
			showFORECAST(SERVER.FORECAST_DATA);
			break;
		default:
			showNOW(SERVER.WEATHER_DATA);
	}
}
