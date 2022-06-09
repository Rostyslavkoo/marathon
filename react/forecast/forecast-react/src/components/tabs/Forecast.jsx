import { SERVER } from './../constans';
import { format } from 'date-fns';
import { CityContext } from './../App';

function getCelciumTemp(data) {
	return Math.round(data - 273.15);
}
function Forecast() {
	return (
		<CityContext.Consumer>
			{({forecast}) => (
				<div className='tab tab-forecast '>
					<div className='title forecast-city_name'>
						{forecast.name || '--'}
					</div>
					{forecast.list.map((list_item, key) => (
						<div className='info-block' key={key}>
							<div className='title'>
								<span>{format(new Date(list_item.dt_txt), 'LLL d')}</span>
								<p>{format(new Date(list_item.dt_txt), 'kk:mm')}</p>
							</div>
							<div className='footer'>
								<div className='info-text'>
									<div>
										<span>Temperature:</span>
										<p>{getCelciumTemp(list_item.main.temp)}°</p>
									</div>
									<div>
										<span>Feels like:</span>
										<p>{getCelciumTemp(list_item.main.feels_like)}°</p>
									</div>
								</div>
								<div className='info-icon'>
									<span>{list_item.weather[0].main}</span>
									<img src={SERVER.ICON + list_item.weather[0].icon + '.png'} />
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</CityContext.Consumer>
	);
}

export default Forecast;
