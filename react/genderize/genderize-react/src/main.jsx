import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css';
let inputValue = '';
const root = ReactDOM.createRoot(document.getElementById('root'));

function Button(props) {
	function handleClick() {
		sendName();
	}
	return (
		<button className={props.className} onClick={handleClick}>
			{props.label}
		</button>
	);
}
function TexInput(props) {
	function onChangeInput(e) {
		inputValue = e.target.value;
	}
	function onKeyDown(e) {
		if (e.keyCode === 13) {
			sendName();
		}
	}
	return (
		<input
			type='text'
			placeholder={props.label}
			onChange={onChangeInput}
			onKeyDownCapture={onKeyDown}
		/>
	);
}
function sendName() {
	alert(inputValue)
}
function Main() {
	return (
		<div className='container'>
			<div>
				<h2>Enter a name</h2>
				<div className='d-flex jusitify-start align-center mt-1'>
					<TexInput label='Type a name' />
					<Button label='Sent' className='ml-1' />
				</div>
			</div>
		</div>
	);
}

root.render(<Main />);
