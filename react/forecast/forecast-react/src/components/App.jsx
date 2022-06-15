import Header from './Header';
import TabsComponent from './tabs/TabsComponent';
import FavouriteComponent from './favouriteList/FavouriteComponent';
import { useState, useEffect } from 'react';
import CityContext from './context';
import { SERVER } from './constans';
import request from './requestService/request';

function getCelciumTemp(data) {
	return Math.round(data - 273.15);
}

function App() {
	const [cityData, setCityData] = useState({});
	const [favoriteCities, setFavoriteCitiest] = useState([]);
	const [forecast, setForecast] = useState({});

	useEffect(() => {
		setCityData(prev => ({ ...prev, isFavourite: isFavourite(cityData.name) }));
	}, [favoriteCities]);

	function isFavourite(cityName) {
		return (cityData.isFavourite = !!favoriteCities.find(
			favouriteCity => favouriteCity.name === cityName
		));
	}

	async function onSearchCity(cityName) {
		const res = await request.Fetch(SERVER.URL.WEATHER, cityName);
		if (res) {
			const data = {
				name: res.name,
				id: res.id,
				temperature: getCelciumTemp(res.main.temp),
				fells_like: getCelciumTemp(res.main.feels_like),
				weather_info: res.weather[0].main,
				icon: res.weather[0].icon,
				isFavourite: isFavourite(res.name),
				sunrise: res.sys.sunrise,
				sunset: res.sys.sunset,
			};
			setCityData(data);
		}
	}
	return (
		<div className='container'>
			<div className='container__wrapper'>
				<CityContext.Provider
					value={{
						cityData: cityData,
						forecast: forecast,
						setCityData: setCityData,
						setForecast: setForecast,
						setFavoriteCitiest: setFavoriteCitiest,
						onSearchCity: onSearchCity,
						favoriteCities: favoriteCities,
					}}
				>
					<Header onSearchCity={onSearchCity} />
					<div className='content'>
						<TabsComponent />
						<FavouriteComponent favoriteCities={favoriteCities} />
					</div>
				</CityContext.Provider>
			</div>
		</div>
	);
}

export default App;
