import Now from './Now';
import Details from './Details';
import Forecast from './Forecast';
import TabsButtons from './TabsButtons';
import { useState, useEffect } from 'react';
import request from '@/utilities/requestService/request';
import { SERVER } from '@/utilities/constans';
import { connect } from 'react-redux';
import { addForecast } from '@/redux/actions';

export const TABS = {
	NOW: 'Now',
	DETAILS: 'Details',
	FORECAST: 'Forecast',
};
function TabsComponent({ changeTabStep, cityData, forecast = [], dispatch }) {
	const [tabStep, setTabStep] = useState(TABS.NOW);
	useEffect(() => {
		changeTabStep(TABS.NOW);
	}, [cityData]);

	async function changeTabStep(chosenTab) {
		if (!cityData.name) return;
		if (chosenTab === TABS.FORECAST && cityData.name !== forecast.name) {
			const res = await request.Fetch(SERVER.URL.FORECAST, cityData.name);
			const data = {
				name: res.city.name,
				list: res.list,
			};
			dispatch(addForecast(data));
		}
		setTabStep(chosenTab);
	}
	return (
		<div className='tabs__wrapper'>
			{tabStep === TABS.NOW && <Now />}
			{tabStep == TABS.DETAILS && <Details />}
			{tabStep === TABS.FORECAST && <Forecast />}
			<TabsButtons tabStep={tabStep} changeTabStep={changeTabStep} />
		</div>
	);
}
const mapStateToProps = state => ({
	cityData: state.cityData,
	forecast: state.forecast,
});

export default connect(mapStateToProps)(TabsComponent);
