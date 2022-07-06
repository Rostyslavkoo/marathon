import React from 'react';

import { selectSubreddit, fetchPosts } from './../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {
	const dispatch = useDispatch();
	dispatch(selectSubreddit('reactjs'));
    dispatch(fetchPosts('reactjs'))

	return <div>Hello</div>;
}

export default App;
