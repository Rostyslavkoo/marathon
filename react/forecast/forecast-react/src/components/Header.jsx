function Header() {
	return (
		<div className='header'>
			<input type='text' placeholder='Enter a city name' />
			<div className='search_btn'>
				<i className='fa-solid fa-magnifying-glass'></i>
			</div>
		</div>
	);
}

export default Header;
