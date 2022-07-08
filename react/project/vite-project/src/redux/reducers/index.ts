import { combineReducers } from 'redux';
import user from './user';
import filters from './filters';
export default combineReducers({
	user: user,
	filters: filters,
});
