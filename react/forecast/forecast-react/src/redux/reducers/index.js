import { combineReducers } from 'redux';
import cityData from './citydata';
import forecast from './forecast';
import favoriteCities from './favoriteCities';

export default combineReducers({
	favoriteCities,
	cityData,
	forecast,
});
