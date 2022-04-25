import { SERVER, FAVORITE_CITIES } from './constant.js';
import Cookies from 'js-cookie'


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

export function setItemToStore(key, value) {
	const store = JSON.parse(getStoreData());
	store[key] = value;
	localStorage.setItem(SERVER.STORAGE_KEY, JSON.stringify(store));
}

export function setCookie(key, value, options = {}) {
	// let updatedCookie = encodeURIComponent(key) + '=' + encodeURIComponent(value);
	// Object.entries(options).forEach(item => {
	// 	updatedCookie += ';';
	// 	updatedCookie += ` ${item[0]}=${item[1]};`;
	// });
	console.log(key);
	console.log(value);
	console.log(options);
	Cookies.set(key,value,options)
	// document.cookie = updatedCookie;
}

export function getCookie(key) {
	// let matches = document.cookie.match(
	// 	new RegExp(
	// 		'(?:^|; )' +
	// 			key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
	// 			'=([^;]*)'
	// 	)
	// );
	// console.log(matches);
	// return matches ? decodeURIComponent(matches[1]) : undefined;
	return Cookies.get(key)
}
