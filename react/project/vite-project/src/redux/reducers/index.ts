import { combineReducers } from 'redux';
import reducer from './user';
export default combineReducers({
	user:reducer,
});
