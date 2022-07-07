import { createAction } from '@reduxjs/toolkit';

export const USER_DATA = 'USER_DATA';
export const REMOVE_USER_DATA = 'REMOVE_USER_DATA';
export const IS_LOGIN = 'IS_LOGIN';
export const GET_FILMS = 'GET_FILMS';

export const getfilms = createAction('GET_FILMS')

export const setUserData = createAction('USER_DATA')
export const removeUserData = createAction('REMOVE_USER_DATA')


// export const setUserData = (data: any) => ({
// 	type: USER_DATA,
// 	payload: data,
// });
// export const removeUserData = () => ({
// 	type: REMOVE_USER_DATA,
// });

// export const getfilms = (payload:any) => ({
// 	type: GET_FILMS,
// 	payload

// });
