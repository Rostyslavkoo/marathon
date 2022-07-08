import { createSlice } from '@reduxjs/toolkit';

let userData = {};
if (localStorage.user) {
	userData = JSON.parse(localStorage.user);
}
const userSlice = createSlice({
	name: 'users',
	initialState: userData,
	reducers: {
		setUserData(state, action) {
			return {
				...action.payload,
				isLogin: !!action.payload,
			};
		},
		removeUserData(state, action) {
			return (state = []);
		},
		isUserLogin(state, action) {
			return state;
		},
	},
});
const { actions, reducer } = userSlice;
export const { setUserData, removeUserData, isUserLogin } = actions;


export default reducer;
