import Header from './Header';
import TabsComponent from './tabs/TabsComponent';
import FavouriteComponent from './favouriteList/FavouriteComponent';
import request from './requestService/request';
import { SERVER } from './constans';
import { useState, useEffect, createContext } from 'react';

export const CityContext = createContext();

function getCelciumTemp(data) {
	return Math.round(data - 273.15);
}
function App() {
	const [cityData, setCityData] = useState({});
	const [favoriteCities, setFavoriteCitiest] = useState([]);
	const [forecast, setForecast] = useState({});
	const [tabStep, setTabStep] = useState(0);

	useEffect(() => {
		const isFavourite = (cityData.isFavourite = !!favoriteCities.find(
			favouriteCity => favouriteCity.name === cityData.name
		));
		setCityData(prev => ({ ...prev, isFavourite: isFavourite }));
	}, [favoriteCities]);

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
				isFavourite: false,
				sunrise: res.sys.sunrise,
				sunset: res.sys.sunset,
			};
			setCityData(data);
			setTabStep(0);
		}
	}
	async function changeTabStep(chosenTab) {
		if (!cityData.name) return;
		if (chosenTab === 2 && cityData.name !== forecast.name) {
			const res = await request.Fetch(SERVER.URL.FORECAST, cityData.name);
			const data = {
				name: res.city.name,
				list: res.list,
			};
			setForecast(data);
		}
		setTabStep(chosenTab);
	}
	function onChangeFavourite(data) {
		if (!data.isFavourite) {
			setFavoriteCitiest([data, ...favoriteCities]);
		} else {
			onDeleteFavourite(data.id);
		}
	}
	function onClickFavourite(cityName) {
		if (cityName === cityData.name) return;
		onSearchCity(cityName);
	}
	function onDeleteFavourite(cityId) {
		setFavoriteCitiest(
			favoriteCities.filter(favouriteCity => favouriteCity.id !== cityId)
		);
	}

	return (
		<div className='container'>
			<div className='container__wrapper'>
				<Header onSearchCity={onSearchCity} />
				<div className='content'>
					<CityContext.Provider
						value={{ cityData: cityData, forecast: forecast }}
					>
						<TabsComponent
							tabStep={tabStep}
							changeTabStep={changeTabStep}
							onChangeFavourite={onChangeFavourite}
						/>
					</CityContext.Provider>
					<FavouriteComponent
						favoriteCities={favoriteCities}
						onClickFavourite={onClickFavourite}
						onDeleteFavourite={onDeleteFavourite}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
