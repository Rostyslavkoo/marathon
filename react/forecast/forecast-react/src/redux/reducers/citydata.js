const cityData = (state = [], action) => {
	switch (action.type) {
		case 'CITY_DATA':
			return action.payload;
		default:
			return state;
	}
};
export default cityData;
