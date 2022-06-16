import Now from './Now';
import Details from './Details';
import Forecast from './Forecast';
import TabsButtons from './TabsButtons';
import { useState, useEffect } from 'react';
import request from './../requestService/request';
import { SERVER } from './../constans';
import { connect } from 'react-redux';
import { addForecast } from './../../redux/actions';

function TabsComponent({ changeTabStep, cityData, forecast = [], dispatch }) {
	const [tabStep, setTabStep] = useState(0);
	useEffect(() => {
		changeTabStep(0);
	}, [cityData]);

	async function changeTabStep(chosenTab) {
		if (!cityData.name) return;
		if (chosenTab === 2 && cityData.name !== forecast.name) {
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
			{tabStep === 0 && <Now />}
			{tabStep == 1 && <Details />}
			{tabStep === 2 && <Forecast />}
			<TabsButtons tabStep={tabStep} changeTabStep={changeTabStep} />
		</div>
	);
}
const mapStateToProps = state => ({
	cityData: state.cityData,
	forecast: state.forecast,
});

export default connect(mapStateToProps)(TabsComponent);
