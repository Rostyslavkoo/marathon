import {
	showInfo,
	showDetails,
	showForecast,
	addToFavoriteUI,
	removeFavouriteUI,
} from './view.js';
import { UI_ELEMENTS, SERVER, FAVORITE_CITIES } from './constant.js';

SERVER.FORECAST_DATA = await getJSON(SERVER.URL.FORECAST);
SERVER.WEATHER_DATA = await getJSON(SERVER.URL.WEATHER);

showInfo(SERVER.WEATHER_DATA);

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
		}
		showInfo(SERVER.WEATHER_DATA);
	}
}); 

UI_ELEMENTS.MAGNIFY.addEventListener('click', async () => {
	if (await getJSON(SERVER.URL.WEATHER)) {
		SERVER.WEATHER_DATA = await getJSON(SERVER.URL.WEATHER);
		SERVER.FORECAST_DATA = await getJSON(SERVER.URL.FORECAST);
	}
	showInfo(SERVER.WEATHER_DATA);
});

UI_ELEMENTS.TABS.BTN.NOW.addEventListener('click', async () => {
	showInfo(SERVER.WEATHER_DATA);
});

UI_ELEMENTS.TABS.BTN.DETAILS.addEventListener('click', () => {
	showDetails(SERVER.WEATHER_DATA);
});

UI_ELEMENTS.TABS.BTN.FORECAST.addEventListener('click', () => {
	showForecast(SERVER.FORECAST_DATA);
});

export async function showFavouriteCity() {
	UI_ELEMENTS.INPUT.value = ''
	showInfo(await getJSON(SERVER.URL.WEATHER, this.textContent));
}

export function deleteAddedCity() {
	const removed_id = Number(this.id.split('-')[1]);
	const index = FAVORITE_CITIES.findIndex(
		finded_city => finded_city.id === removed_id
	);
	FAVORITE_CITIES.splice(index, 1);
	removeFavouriteUI(removed_id, removed_id === SERVER.WEATHER_DATA.id);
}

function addToFavorite() {
	FAVORITE_CITIES.push({
		name: SERVER.WEATHER_DATA.name,
		id: SERVER.WEATHER_DATA.id,
	});
	addToFavoriteUI(SERVER.WEATHER_DATA);
}

export function removeFromFavorite() {
	const index = FAVORITE_CITIES.findIndex(
		finded_city => finded_city.id === SERVER.WEATHER_DATA.id
	);
	FAVORITE_CITIES.splice(index, 1);
	removeFavouriteUI(SERVER.WEATHER_DATA.id, true);
}

function getCityName(city_name) {
	if (city_name) {
		return city_name;
	}
	if (UI_ELEMENTS.INPUT.value) {
		return UI_ELEMENTS.INPUT.value;
	}
	return 'Lviv';
}

async function getJSON(data, city_name = null) {
	const cityName = getCityName(city_name);
	const url = `${data}?q=${cityName}&appid=${SERVER.API_KEY}`;
	return fetch(url)
		.then(response => {
			if (response.ok) {
				const res = response.json();
				return res;
			} else {
				alert('unknown city');
				return null;
			}
		})
		.catch(alert);
}
