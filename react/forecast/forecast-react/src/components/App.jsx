import Header from './Header';
import TabsComponent from './tabs/TabsComponent';
import FavouriteComponent from './favouriteList/FavouriteComponent';
import request from './requestService/request';
import { SERVER } from './constans';
import { useState, useEffect } from 'react';
import CityContext from './context';

function App() {
	const [cityData, setCityData] = useState({});
	const [favoriteCities, setFavoriteCitiest] = useState([]);
	const [forecast, setForecast] = useState({});

	useEffect(() => {
		const isFavourite = (cityData.isFavourite = !!favoriteCities.find(
			favouriteCity => favouriteCity.name === cityData.name
		));
		setCityData(prev => ({ ...prev, isFavourite: isFavourite }));
	}, [favoriteCities]);

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
				<CityContext.Provider
					value={{
						cityData: cityData,
						forecast: forecast,
						setCityData: setCityData,
						setForecast: setForecast,
					}}
				>
					<Header />
					<div className='content'>
						<TabsComponent onChangeFavourite={onChangeFavourite} />
						<FavouriteComponent
							favoriteCities={favoriteCities}
							onClickFavourite={onClickFavourite}
							onDeleteFavourite={onDeleteFavourite}
						/>
					</div>
				</CityContext.Provider>
			</div>
		</div>
	);
}

export default App;
