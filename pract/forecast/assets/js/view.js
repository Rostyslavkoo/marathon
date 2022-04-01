import { UI_ELEMENTS, SERVER, MONTHS } from './constant.js';
import { isFavorite, showFavouriteCity, deleteFavouriteCity } from './main.js';

function getCelciumTemp(data) {
	return Math.round(data - 273.15);
}

function showInfo(data) {
	data.then(response => {
		if (!response) {
			return;
		}
		SERVER.OUTPUT_DATA = [];
		SERVER.OUTPUT_DATA.push(response);

		choseTab('NOW');

		UI_ELEMENTS.TABS.BTN.DETAILS.classList.remove('active');
		UI_ELEMENTS.TABS.BTN.NOW.classList.add('active');
		UI_ELEMENTS.TABS.BTN.FORECAST.classList.remove('active');

		UI_ELEMENTS.TABS.NOW.NAME.textContent = response.name;
		UI_ELEMENTS.TABS.NOW.TEMPERATURE.textContent = `${getCelciumTemp(
			response.main.temp
		)}°`;
		UI_ELEMENTS.TABS.NOW.ICON.src = `${
			SERVER.ICON + response.weather[0].icon
		}@4x.png`;

		if (isFavorite()) {
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
	});
}

function showDetails(response) {
	choseTab('DETAILS');

	UI_ELEMENTS.TABS.DETAILS.CITY_NAME.textContent = response.name;
	UI_ELEMENTS.TABS.DETAILS.TEMPERATURE.textContent = `${getCelciumTemp(
		response.main.temp
	)}°`;
	UI_ELEMENTS.TABS.DETAILS.FEELS_LIKE.textContent = `${getCelciumTemp(
		response.main.feels_like
	)}°`;
	UI_ELEMENTS.TABS.DETAILS.WEATHER.textContent = response.weather[0].main;
	UI_ELEMENTS.TABS.DETAILS.SUNRISE.textContent = timeConverter(
		response.sys.sunrise
	);
	UI_ELEMENTS.TABS.DETAILS.SUNSET.textContent = timeConverter(
		response.sys.sunset
	);
}
function showForecast(response) {
	response.then(data => {
		UI_ELEMENTS.TABS.FORECAST.CITY_NAME.textContent = data.city.name;

		data.list.reverse().forEach(item => {
			UI_ELEMENTS.TABS.FORECAST.CITY_NAME.insertAdjacentHTML(
				'afterEnd',
				`
			<div class="info-block">
			<div class="title">
				<span>${dateConverter(item.dt)}</span>
				<p>${timeConverter(item.dt)}</p>
			</div>
			<div class="footer">
				<div class="info-text">
					<div>
						<span>Temperature:</span>
						<p>${getCelciumTemp(item.main.temp)}°</p>
					</div>
					<div>
						<span>Feels like:</span>
						<p>${getCelciumTemp(item.main.feels_like)}°</p>
					</div>
				</div>
				<div class="info-icon">
					<span>${item.weather[0].main}</span>
					<img src="${SERVER.ICON + item.weather[0].icon}.png">
				</div>
			</div>
		</div>
			`
			);
		});
	});
	choseTab('FORECAST');
}

function choseTab(info) {
	Object.keys(UI_ELEMENTS.TABS)
		.splice(1)
		.forEach(item => {
			if (item === info) {
				UI_ELEMENTS.TABS[info].TAB_MAIN.classList.remove('remove-tab');
				UI_ELEMENTS.TABS.BTN[info].classList.add('active');
			} else {
				UI_ELEMENTS.TABS[item].TAB_MAIN.classList.add('remove-tab');
				UI_ELEMENTS.TABS.BTN[item].classList.remove('active');
			}
		});
}

function addToFavoriteUI(data) {
	UI_ELEMENTS.TABS.NOW.FAVORITE_ICON.classList.add('fa-solid', 'active_heart');
	const tempDiv = document.createElement('div');
	const tempSpan = document.createElement('span');
	const tempI = document.createElement('i');
	tempDiv.id = `div_id-${data.id}`;

	tempI.id = `icon_id-${data.id}`;
	tempI.className = 'fa-solid fa-xmark';
	tempI.addEventListener('click', deleteFavouriteCity);
	tempDiv.insertAdjacentElement('afterbegin', tempI);

	tempSpan.id = `span_id-${data.id}`;
	tempSpan.innerHTML = data.name;
	tempSpan.addEventListener('click', showFavouriteCity);
	tempDiv.insertAdjacentElement('afterbegin', tempSpan);

	UI_ELEMENTS.FAVOURITE_LIST.insertAdjacentElement('afterbegin', tempDiv);
}

function removeFavouriteUI(id, removeHeart = false) {
	document.querySelector(`#div_id-${id}`).remove();

	if (removeHeart) {
		UI_ELEMENTS.TABS.NOW.FAVORITE_ICON.classList.remove(
			'fa-solid',
			'active_heart'
		);
	}
}

function timeConverter(data) {
	let tmpDate = new Date(data * 1000);

	return tmpDate.toLocaleString().split(' ')[1].slice(0, 5);
}
function dateConverter(data) {
	let tmpDate = new Date(data * 1000);
	const month = [MONTHS[tmpDate.getDate()]];
	const day = tmpDate.toLocaleString().split(' ')[0].slice(0, 2);

	return `${month} ${day}`;
}

export {
	showInfo,
	removeFavouriteUI,
	addToFavoriteUI,
	showDetails,
	showForecast,
};
