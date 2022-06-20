const forecast = (state = [], action) => {
	switch (action.type) {
		case 'FORECAST':
			return action.payload;
		default:
			return state;
	}
};
export default forecast;
