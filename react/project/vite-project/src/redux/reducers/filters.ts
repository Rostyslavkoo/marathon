import { createSlice } from '@reduxjs/toolkit';
import { getSortedCONSTANS } from '@/data/sorted';

const initialState = {
	page: 1,
	paginationLength: 1,
	filterValues: [],
	isLikedFilter: false,
	isLaterFilter: false,
	releaseYear: 2020,
	sortedValue: getSortedCONSTANS().DEFAULT,
};

const filtersSlice = createSlice({
	name: 'filtes',
	initialState: initialState,
	reducers: {
		setFilters(state, action) {
			return (state = { ...state, ...action.payload });
		},
		resetFilters(state, actions) {
			return (state = initialState);
		},
	},
});

const { actions, reducer } = filtersSlice;
export const { setFilters, resetFilters } = actions;

export default reducer;
