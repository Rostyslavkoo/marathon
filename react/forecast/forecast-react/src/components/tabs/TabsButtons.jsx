function TabsButtons({ tabStep ,changeTabStep}) {
	return (
		<div className='tabs__info'>
			<div
				onClick={() => changeTabStep(0)}
				className={
					tabStep === 0 ? 'active tab-btn tab-now__btn' : 'tab-btn tab-now__btn'
				}
			>
				Now
			</div>
			<div
				onClick={() => changeTabStep(1)}
				className={
					tabStep === 1
						? 'active tab-btn tab-details__btn'
						: 'tab-btn tab-details__btn'
				}
			>
				Details
			</div>
			<div
				onClick={() => changeTabStep(2)}
				className={
					tabStep === 2
						? 'active tab-btn tab-forecast__btnz'
						: 'tab-btn tab-forecast__btn'
				}
			>
				Forecast
			</div>
		</div>
	);
}
export default TabsButtons;
