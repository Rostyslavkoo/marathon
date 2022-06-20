import { TABS } from './TabsComponent';

function TabsButtons({ tabStep, changeTabStep }) {
	return (
		<div className='tabs__info'>
			<div
				onClick={() => changeTabStep(TABS.NOW)}
				className={
					tabStep === TABS.NOW
						? 'active tab-btn tab-now__btn'
						: 'tab-btn tab-now__btn'
				}
			>
				{TABS.NOW}
			</div>
			<div
				onClick={() => changeTabStep(TABS.DETAILS)}
				className={
					tabStep === TABS.DETAILS
						? 'active tab-btn tab-details__btn'
						: 'tab-btn tab-details__btn'
				}
			>
				{TABS.DETAILS}
			</div>
			<div
				onClick={() => changeTabStep(TABS.FORECAST)}
				className={
					tabStep === TABS.FORECAST
						? 'active tab-btn tab-forecast__btnz'
						: 'tab-btn tab-forecast__btn'
				}
			>
				{TABS.FORECAST}
			</div>
		</div>
	);
}
export default TabsButtons;
