import { SERVER } from './constans';
import request from './requestService/request';
import CityContext from './context';
import { useContext, useState } from 'react';

function getCelciumTemp(data) {
	return Math.round(data - 273.15);
}

function Header() {
	const [cityValue, setCityValue] = useState('Lviv');
	const { setCityData } = useContext(CityContext);

	function handleChange(e) {
		setCityValue(e.target.value);
	}
	function handleClick() {
		if (!cityValue) return;
		onSearchCity(cityValue);
		setCityValue('');
	}
	function handleKeyPress(e) {
		if (e.charCode === 13) [handleClick()];
	}
	async function onSearchCity(cityName) {
		const res = await request.Fetch(SERVER.URL.WEATHER, cityName);
		if (res) {
			const data = {
				name: res.name,
				id: res.id,
				temperature: getCelciumTemp(res.main.temp),
				fells_like: getCelciumTemp(res.main.feels_like),
				weather_info: res.weather[0].main,
				icon: res.weather[0].icon,
				isFavourite: false,
				sunrise: res.sys.sunrise,
				sunset: res.sys.sunset,
			};
			setCityData(data);
		}
	}
	return (
		<div className='header'>
			<input
				type='text'
				placeholder='Enter a city name'
				value={cityValue}
				onChange={handleChange}
				onKeyPress={handleKeyPress}
			/>
			<div className='search_btn' onClick={handleClick}>
				<i className='fa-solid fa-magnifying-glass'></i>
			</div>
		</div>
	);
}

export default Header;
