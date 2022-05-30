import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
function NumberList(props) {
	const numbers = props.numbers;
	const listItems = numbers.map((number,index) => (
		<li key={index.toString()}>{number + 1}</li>
	));
	console.log(listItems)
	return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5, 6];
root.render(<NumberList numbers={numbers} />);
