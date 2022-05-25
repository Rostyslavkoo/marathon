import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css';
import Button from './components/Button';
import TexInput from './components/TextInput';

const root = ReactDOM.createRoot(document.getElementById('root'));
function App() {
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

root.render(<App />);
