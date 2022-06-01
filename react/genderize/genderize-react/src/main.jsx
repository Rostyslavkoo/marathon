import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Button(props) {
	return (
		<input type='submit' value={props.label} className={props.className} />
	);
}
function TexInput(props) {
	function handleCange(e) {
		props.onTextChange(e.target.value);
	}
	return (
		<div>
			<input type='text' placeholder={props.label} onChange={handleCange} />
			<div style={{ height: '30px' }}>
				{props.value.length > 0 && props.value.length < 3 && (
					<div style={{ fontSize: '14px', color: '#B33D30' }}>
						name is too short
					</div>
				)}
				<p style={{ height: '30px', fontSize: '14px', color: 'grey' }}>
					{props.gender ? `gender – ${props.gender}` : ''}
				</p>
			</div>
		</div>
	);
}

function Main() {
	const [value, setValue] = useState('');
	const [gender, setGender] = useState('');

	function onChangeInput(e) {
		setValue(e);
	}
	function handleSubmit(e) {
		e.preventDefault();
		onSent();
	}

	async function onSent() {
		try {
			const serverUrl = 'https://api.genderize.io';
			const res = await (await fetch(`${serverUrl}?name=${value}`)).json();
			setGender(res.gender);
		} catch (e) {
			alert(e);
		}
	}
	return (
		<div className='container'>
			<div>
				<h2>Enter a name</h2>
				<form onSubmit={handleSubmit}>
					<div className='d-flex jusitify-start align-start mt-1'>
						<TexInput
							value={value}
							gender={gender}
							label='Type a name'
							onTextChange={onChangeInput}
						/>
						<Button label='Sent' className='ml-1 btn' />
					</div>
				</form>
			</div>
		</div>
	);
}

root.render(<Main />);
