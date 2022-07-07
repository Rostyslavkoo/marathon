import { createSlice } from '@reduxjs/toolkit';

let userData = {};
if (localStorage.user) {
	userData = JSON.parse(localStorage.user);
}
const userSlice = createSlice({
	name: 'user',
	initialState: userData,
	reducers: {
		setUserData(state, action) {
			return action.payload;
		},
		removeUserData(state, action) {
			return (state = []);
		},
	},
});
const { actions, reducer } = userSlice;
export const { setUserData, removeUserData } = actions;

console.log(actions);
export default reducer;
