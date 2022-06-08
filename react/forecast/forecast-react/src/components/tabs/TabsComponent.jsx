import Now from './Now';
import Details from './Details';
import Forecast from './Forecast';
import TabsButtons from './TabsButtons';

function TabsComponent({
	cityData,
	tabStep,
	changeTabStep,
	forecast,
	onChangeFavourite,
}) {
	return (
		<div className='tabs__wrapper'>
			{tabStep === 0 && (
				<Now cityData={cityData} onChangeFavourite={onChangeFavourite} />
			)}
			{tabStep == 1 && <Details cityData={cityData} />}
			{tabStep === 2 && <Forecast forecast={forecast} />}
			<TabsButtons tabStep={tabStep} changeTabStep={changeTabStep} />
		</div>
	);
}

export default TabsComponent;
