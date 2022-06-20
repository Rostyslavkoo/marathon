function List({ favoriteCities,onClickFavourite,onDeleteFavourite }) {
	return (
		<div className='content' id='favorite-list'>
			{favoriteCities.map(item => (
				<div key={item.id}>
					<span onClick={(() => onClickFavourite(item.name))}>{item.name}</span>
					<i className='fa-solid fa-xmark' onClick={(() => onDeleteFavourite(item.id))}></i>
				</div>
			))}
		</div>
	);
}

export default List;
