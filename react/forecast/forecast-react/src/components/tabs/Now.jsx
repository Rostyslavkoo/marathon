import { SERVER } from './../constans';
import CityContext from './../context';
import { useContext } from 'react';
import { connect } from 'react-redux';

function Now({
	onChangeFavourite,
	cityData: { name, id, icon, temperature, isFavourite },
}) {
	const { setFavoriteCitiest, favoriteCities } = useContext(CityContext);
	function onChangeFavourite(data) {
		if (!data.isFavourite) {
			setFavoriteCitiest([data, ...favoriteCities]);
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
							isFavourite: isFavourite,
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
const mapStateToProps = state => ({
	cityData: state.cityData,
});

export default connect(mapStateToProps)(Now);
