import { format } from 'date-fns';

function Details({
	cityData: {
		name,
		id,
		temperature,
		fells_like,
		weather_info,
		sunrise,
		sunset,
	},
}) {
	return (
		<div className='tab tab-details '>
			<div className='title details-city_name'>{name || '--'}</div>
			<div className='info'>
				<div>
					<span>Temperature:</span>
					<p className='details-temperature'>{temperature || '--'}°</p>
				</div>
				<div>
					<span>Feels like:</span>
					<p className='details-feels_like'>{fells_like || '--'}°</p>
				</div>
				<div>
					<span>Weather:</span>
					<p className='details-weather'>{weather_info || '--'}</p>
				</div>
				<div>
					<span>Sunrise:</span>
					<p className='details-sunrise'>
						{sunrise ? format(new Date(sunrise), 'kk:mm') : '--:--'}
					</p>
				</div>
				<div>
					<span>Sunset:</span>
					<p className='details-sunset'>
						{' '}
						{sunset ? format(new Date(sunset), 'kk:mm') : '--:--'}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Details;
