import { combineReducers } from 'redux';
import cityData from './citydata';
import forecast from './forecast';

export default combineReducers({
	cityData,
	forecast,
});
