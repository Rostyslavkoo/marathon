import List from './List';
import CityContext from '@/utilities/context';
import { useContext } from 'react';
import { connect, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteFavouriteCities } from '@/redux/actions';

function FavouriteComponent({ favoriteCities, cityData }) {
	const { onSearchCity } = useContext(CityContext);
	const dispatch = useDispatch();
	function onClickFavourite(cityName) {
		if (cityData.name && cityName === cityData.name ) return;
		onSearchCity(cityName);
	}
	function onDeleteFavourite(cityId) {
		dispatch(deleteFavouriteCities(cityId));
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
	favoriteCities: state.favoriteCities,
	cityData: state.cityData,
});
export default connect(mapStateToProps)(FavouriteComponent);
