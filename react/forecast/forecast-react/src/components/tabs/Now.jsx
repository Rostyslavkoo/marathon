import { SERVER } from './../constans';
import CityContext from './../context';
import { useContext } from 'react';

function Now({ onChangeFavourite }) {
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
		<CityContext.Consumer>
			{({ cityData: { name, id, icon, temperature, isFavourite } }) => (
				<div className='tab tab-now '>
					<div className='title'>{temperature || '--'}°</div>
					<div className='content'>
						{icon && (
							<img id='city-icon' src={`${SERVER.ICON + icon}@4x.png`} />
						)}
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
			)}
		</CityContext.Consumer>
	);
}

export default Now;
