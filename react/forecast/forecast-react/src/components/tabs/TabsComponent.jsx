import Now from './Now';
import Details from './Details';
import Forecast from './Forecast';
import TabsButtons from './TabsButtons';
import { useState, useContext } from 'react';
import CityContext from './../context';
import request from './../requestService/request';
import { SERVER } from './../constans';

function TabsComponent({ changeTabStep, onChangeFavourite }) {
	const [tabStep, setTabStep] = useState(0);
	const { cityData, setForecast, forecast } = useContext(CityContext);

	async function changeTabStep(chosenTab) {
		if (!cityData.name) return;
		if (chosenTab === 2 && cityData.name !== forecast.name) {
			const res = await request.Fetch(SERVER.URL.FORECAST, cityData.name);
			const data = {
				name: res.city.name,
				list: res.list,
			};
			setForecast(data);
		}
		setTabStep(chosenTab);
	}
	return (
		<div className='tabs__wrapper'>
			{tabStep === 0 && <Now  />}
			{tabStep == 1 && <Details />}
			{tabStep === 2 && <Forecast />}
			<TabsButtons tabStep={tabStep} changeTabStep={changeTabStep} />
		</div>
	);
}

export default TabsComponent;
