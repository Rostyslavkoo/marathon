function Details() {
	return (
		<div className='tab tab-details remove-tab'>
			<div className='title details-city_name'>--</div>
			<div className='info'>
				<div>
					<span>Temperature:</span>
					<p className='details-temperature'>--°</p>
				</div>
				<div>
					<span>Feels like:</span>
					<p className='details-feels_like'>--°</p>
				</div>
				<div>
					<span>Weather:</span>
					<p className='details-weather'>--</p>
				</div>
				<div>
					<span>Sunrise:</span>
					<p className='details-sunrise'>--:--</p>
				</div>
				<div>
					<span>Sunset:</span>
					<p className='details-sunset'>--:--</p>
				</div>
			</div>
		</div>
	);
}

export default Details