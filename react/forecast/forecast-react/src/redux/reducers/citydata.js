const cityData = (state = [], action) => {
	switch (action.type) {
		case 'CITY_DATA':
			return action.cityData;
		default:
			return state;
	}
};
export default cityData;
