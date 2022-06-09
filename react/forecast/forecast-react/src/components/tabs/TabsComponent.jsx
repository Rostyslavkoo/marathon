import Now from './Now';
import Details from './Details';
import Forecast from './Forecast';
import TabsButtons from './TabsButtons';

function TabsComponent({
	tabStep,
	changeTabStep,
	forecast,
	onChangeFavourite,
}) {
	return (
		<div className='tabs__wrapper'>
			{tabStep === 0 && <Now onChangeFavourite={onChangeFavourite} />}
			{tabStep == 1 && <Details />}
			{tabStep === 2 && <Forecast />}
			<TabsButtons tabStep={tabStep} changeTabStep={changeTabStep} />
		</div>
	);
}

export default TabsComponent;
