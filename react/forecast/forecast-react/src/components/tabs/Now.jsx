function Now() {
	return (
		<div className='tab tab-now '>
			<div className='title' id='city-temperature'>
				--°
			</div>
			<div className='content'>
				<img id='city-icon' />
			</div>
			<div className='footer'>
				<span id='city-name'>-- </span>
				<i id='city-favorite' className='fa-regular fa-heart'></i>
			</div>
		</div>
	);
}

export default Now;
