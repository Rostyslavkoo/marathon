import { UI_ELEMENTS, SERVER, FAVORITE_CITIES } from './constant.js';
import { showFavouriteCity, deleteAddedCity } from './main.js';
import { setItemToStore } from './store.js';
import { format } from 'date-fns';

FAVORITE_CITIES.forEach(favorite_city => {
	addToFavoriteUI({ id: favorite_city.id, name: favorite_city.name });
});

function showNOW({
	id = null,
	name,
	main: { temp: temperature } = {},
	weather: [{ icon } = {}] = [],
} = {}) {
	if (!id) return;
	choseTab('NOW');
	setItemToStore('chosen_tab', 'NOW');
	UI_ELEMENTS.TABS.BTN.DETAILS.classList.remove('active');
	UI_ELEMENTS.TABS.BTN.NOW.classList.add('active');
	UI_ELEMENTS.TABS.BTN.FORECAST.classList.remove('active');

	UI_ELEMENTS.TABS.NOW.NAME.textContent = name;
	UI_ELEMENTS.TABS.NOW.TEMPERATURE.textContent = `${getCelciumTemp(
		temperature
	)}°`;
	UI_ELEMENTS.TABS.NOW.ICON.src = `${SERVER.ICON + icon}@4x.png`;

	const isExistCity = FAVORITE_CITIES.find(
		finded_city => finded_city.id === id
	);

	if (isExistCity) {
		UI_ELEMENTS.TABS.NOW.FAVORITE_ICON.classList.add(
			'fa-solid',
			'active_heart'
		);
	} else {
		UI_ELEMENTS.TABS.NOW.FAVORITE_ICON.classList.remove(
			'fa-solid',
			'active_heart'
		);
	}
}

function showDETAILS({
	id = null,
	name,
	sys: { sunrise, sunset },
	weather: [{ main: weather_info }],
	main: { temp, feels_like },
} = {}) {
	if (!id) return;
	choseTab('DETAILS');
	setItemToStore('chosen_tab', 'DETAILS');

	UI_ELEMENTS.TABS.DETAILS.CITY_NAME.textContent = name;
	UI_ELEMENTS.TABS.DETAILS.TEMPERATURE.textContent = `${getCelciumTemp(temp)}°`;
	UI_ELEMENTS.TABS.DETAILS.FEELS_LIKE.textContent = `${getCelciumTemp(
		feels_like
	)}°`;
	UI_ELEMENTS.TABS.DETAILS.WEATHER.textContent = weather_info;
	UI_ELEMENTS.TABS.DETAILS.SUNRISE.textContent = format(
		new Date(sunrise),
		'kk:mm'
	);
	UI_ELEMENTS.TABS.DETAILS.SUNSET.textContent = format(
		new Date(sunset),
		'kk:mm'
	);
}

function showFORECAST({ list: forecast_list, city: { name: city_name } }) {
	if (getChosenTab() === 'FORECAST') return;

	choseTab('FORECAST');
	setItemToStore('chosen_tab', 'FORECAST');

	UI_ELEMENTS.TABS.FORECAST.CITY_NAME.textContent = city_name;
	forecast_list.forEach(list_item => {
		UI_ELEMENTS.TABS.FORECAST.CITY_NAME.insertAdjacentHTML(
			'afterEnd',
			`
			<div class="info-block">
			<div class="title">
				<span>${format(new Date(list_item.dt_txt), 'LLL d')}</span>
				<p>${format(new Date(list_item.dt_txt), 'kk:mm')}</p>
			</div>
			<div class="footer">
				<div class="info-text">
					<div>
						<span>Temperature:</span>
						<p>${getCelciumTemp(list_item.main.temp)}°</p>
					</div>
					<div>
						<span>Feels like:</span>
						<p>${getCelciumTemp(list_item.main.feels_like)}°</p>
					</div>
				</div>
				<div class="info-icon">
					<span>${list_item.weather[0].main}</span>
					<img src="${SERVER.ICON + list_item.weather[0].icon}.png">
				</div>
			</div>
		</div>
			`
		);
	});
}

function choseTab(current_tab) {
	Object.keys(UI_ELEMENTS.TABS)
		.splice(1)
		.forEach(inner_tab => {
			if (inner_tab === current_tab) {
				UI_ELEMENTS.TABS[current_tab].TAB_MAIN.classList.remove('remove-tab');
				UI_ELEMENTS.TABS.BTN[current_tab].classList.add('active');
			} else {
				UI_ELEMENTS.TABS[inner_tab].TAB_MAIN.classList.add('remove-tab');
				UI_ELEMENTS.TABS.BTN[inner_tab].classList.remove('active');
			}
		});
}
function getChosenTab() {
	let returnedTab;
	const TABS_NAME = Object.keys(UI_ELEMENTS.TABS).splice(1);
	TABS_NAME.forEach(element => {
		const tab =
			!UI_ELEMENTS.TABS[element].TAB_MAIN.classList.contains('remove-tab');
		if (tab) {
			returnedTab = element;
		}
	});

	return returnedTab;
}

function addToFavoriteUI({ id, name } = {}) {
	UI_ELEMENTS.TABS.NOW.FAVORITE_ICON.classList.add('fa-solid', 'active_heart');
	const tempDiv = document.createElement('div');
	const tempSpan = document.createElement('span');
	const tempI = document.createElement('i');
	tempDiv.id = `div_id-${id}`;

	// create icon inner
	tempI.id = `icon_id-${id}`;
	tempI.className = 'fa-solid fa-xmark';
	tempI.addEventListener('click', deleteAddedCity);
	tempDiv.insertAdjacentElement('afterbegin', tempI);

	// create span inner
	tempSpan.id = `span_id-${id}`;
	tempSpan.innerHTML = name;
	tempSpan.addEventListener('click', showFavouriteCity);
	tempDiv.insertAdjacentElement('afterbegin', tempSpan);

	UI_ELEMENTS.FAVOURITE_LIST.insertAdjacentElement('afterbegin', tempDiv);
}

function removeFavouriteUI(removed_id, removeHeart = false) {
	document.querySelector(`#div_id-${removed_id}`).remove();
	if (removeHeart) {
		UI_ELEMENTS.TABS.NOW.FAVORITE_ICON.classList.remove(
			'fa-solid',
			'active_heart'
		);
	}
}
function getCelciumTemp(data) {
	return Math.round(data - 273.15);
}

export {
	showNOW,
	removeFavouriteUI,
	addToFavoriteUI,
	showDETAILS,
	showFORECAST,
};
