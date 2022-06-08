import { useState } from 'react';

function Header({ onSearchCity }) {
	const [cityValue, setCityValue] = useState('Lviv');

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
