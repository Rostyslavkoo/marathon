function createStore(reducer, initialState) {
	let currentReduser = reducer;
	let currentState = initialState;
	let listener = () => {};
	return {
		getState() {
			return currentState;
		},
		dispatch(action) {
			currentState = currentReduser(currentState, action);
		},
		subscribe(newListener) {
			listener = newListener;
		},
	};
}

function counter(state = 0, action) {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
}

let store = createStore(counter);

store.subscribe(() => {
	store.getState();
});

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
