import { SERVER } from './../constans';

function Now({
	cityData: { name, id, icon, temperature, isFavourite },
	onChangeFavourite,
}) {
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

export default Now;
