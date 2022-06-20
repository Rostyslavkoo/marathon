import Header from './Header';
import TabsComponent from './tabs/TabsComponent';
import FavouriteComponent from './favouriteList/FavouriteComponent';
import { useState, useEffect } from 'react';
import CityContext from '@/utilities/context';
import { SERVER } from '@/utilities/constans';
import request from '@/utilities/requestService/request';
import { addCityData, toggleFavourite } from '@/redux/actions';
import { connect } from 'react-redux';

function getCelciumTemp(data) {
	return Math.round(data - 273.15);
}

function App({ dispatch, favoriteCities, cityData }) {
	// const [favoriteCities, setFavoriteCitiest] = useState([]);

	useEffect(() => {
		if ('id' in cityData) {
			dispatch(toggleFavourite(cityData.id));
		}
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
			console.log(data);
			dispatch(addCityData(data));
		}
	}
	return (
		<>
			<CityContext.Provider
				value={{
					onSearchCity: onSearchCity,
				}}
			>
				<Header onSearchCity={onSearchCity} />
				<div className='content'>
					<TabsComponent />
					<FavouriteComponent />
				</div>
			</CityContext.Provider>
		</>
	);
}
const mapStateToProps = state => ({
	cityData: state.cityData,
	favoriteCities: state.favoriteCities,
});

export default connect(mapStateToProps)(App);
