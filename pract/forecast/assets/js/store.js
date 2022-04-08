import { SERVER, FAVORITE_CITIES } from './constant.js';

if (!getStoreData()) {
	localStorage.setItem(SERVER.STORAGE_KEY, JSON.stringify({}));
}

if (!JSON.parse(getStoreData()).city_name) {
	localStorage.setItem(
		SERVER.STORAGE_KEY,
		JSON.stringify({ city_name: 'Lviv' })
	);
}

SERVER.LOCALSTORAGE_DATA = JSON.parse(getStoreData());

if (SERVER.LOCALSTORAGE_DATA.favorite_city) {
	FAVORITE_CITIES.push(...SERVER.LOCALSTORAGE_DATA.favorite_city);
}

function getStoreData() {
	return localStorage.getItem(SERVER.STORAGE_KEY);
}

export function setItemToStore(key,value){
  const store = JSON.parse(getStoreData())
  store[key] = value
    localStorage.setItem(
		SERVER.STORAGE_KEY,
		JSON.stringify(store)
	);
}