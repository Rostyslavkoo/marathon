const forecast = (state = [], action) => {
	switch (action.type) {
		case 'FORECAST':
			return action.forecast;
		default:
			return state;
	}
};
export default forecast;
