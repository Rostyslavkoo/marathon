import List from './List';
import CityContext from './../context';
import { useContext } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function FavouriteComponent({ favoriteCities, cityData }) {
	const { setFavoriteCitiest, onSearchCity } = useContext(CityContext);

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
			<div className='title'>
				Added Locations:
				<nav>
					<NavLink to='/info'>
						<div> Info</div>
					</NavLink>
				</nav>
			</div>

			<List
				favoriteCities={favoriteCities}
				onDeleteFavourite={onDeleteFavourite}
				onClickFavourite={onClickFavourite}
			/>
		</div>
	);
}
const mapStateToProps = state => ({
	cityData: state.cityData,
});
export default connect(mapStateToProps)(FavouriteComponent);