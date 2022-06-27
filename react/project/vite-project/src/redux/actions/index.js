export const USER_DATA = 'USER_DATA';
export const REMOVE_USER_DATA = 'REMOVE_USER_DATA';
export const IS_LOGIN = 'IS_LOGIN'
export const setUserData = data => ({
	type: USER_DATA,
	payload: data,
});
export const removeUserData = data => ({
	type: REMOVE_USER_DATA,
	payload: data,
});

