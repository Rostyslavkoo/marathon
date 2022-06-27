import { USER_DATA, REMOVE_USER_DATA } from './../actions';

let userData = {};
if (localStorage.user) {
	userData = JSON.parse(localStorage.user);
}

const user = (state = userData, action) => {
	switch (action.type) {
		case USER_DATA:
			return action.payload;
		case REMOVE_USER_DATA:
			return (state = []);
		default:
			return state;
	}
};

export default user;
