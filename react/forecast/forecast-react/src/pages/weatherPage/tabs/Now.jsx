import { SERVER } from '@/utilities/constans';
import CityContext from '@/utilities/context';
import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavouriteCities } from '@/redux/actions';

function Now({ onChangeFavourite }) {
	const dispatch = useDispatch();
	const { name, id, icon, temperature, isFavourite } = useSelector(
		state => state.cityData
	);
	const { setFavoriteCitiest, favoriteCities } = useContext(CityContext);
	function onChangeFavourite(data) {
		if (!name) return;
		if (!isFavourite) {
			dispatch(addFavouriteCities(data));
		} else {
			onDeleteFavourite(data.id);
		}
	}
	function onDeleteFavourite(cityId) {
		setFavoriteCitiest(
			favoriteCities.filter(favouriteCity => favouriteCity.id !== cityId)
		);
	}

	return (
		<div className='tab tab-now '>
			<div className='title'>{temperature || '--'}°</div>
			<div className='content'>
				{icon && <img id='city-icon' src={`${SERVER.ICON + icon}@4x.png`} />}
			</div>
			<div className='footer'>
				<span id='city-name'>{name || '--'} </span>
				<i
					onClick={() =>
						onChangeFavourite({
							name: name,
							id: id,
						})
					}
					id='city-favorite'
					className={
						isFavourite
							? 'fa-solid fa-heart active_heart'
							: 'fa-regular fa-heart'
					}
				></i>
			</div>
		</div>
	);
}

export default Now;
