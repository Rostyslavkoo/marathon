import List from './List';
import CityContext from './../context';
import { useContext } from 'react';

function FavouriteComponent({ favoriteCities }) {
	const { setFavoriteCitiest, cityData, onSearchCity } =
		useContext(CityContext);

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
		<div className='locations_info__wrapper'>
			<div className='title'>Added Locations:</div>
			<List
				favoriteCities={favoriteCities}
				onDeleteFavourite={onDeleteFavourite}
				onClickFavourite={onClickFavourite}
			/>
		</div>
	);
}
export default FavouriteComponent;
