import Now from './Now';
import Details from './Details';
import Forecast from './Forecast';
import TabsButtons from './TabsButtons';

function TabsComponent() {
	return (
		<div className='tabs__wrapper'>
			<Now />
			<Details />
			<Forecast />
			<TabsButtons />
		</div>
	);
}

export default TabsComponent;
