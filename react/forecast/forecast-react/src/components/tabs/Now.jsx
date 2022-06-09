import { SERVER } from './../constans';
import { CityContext } from './../App';

function Now({ onChangeFavourite }) {
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
