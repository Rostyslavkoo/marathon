import List from './List';

function FavouriteComponent({
	favoriteCities,
	onDeleteFavourite,
	onClickFavourite,
}) {
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
