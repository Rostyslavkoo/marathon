import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Button extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<input
				type='submit'
				value={this.props.label}
				className={this.props.className}
			/>
		);
	}
}
class TexInput extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<input
					type='text'
					placeholder={this.props.label}
					onChange={e => this.props.onChange(e)}
				/>
				<div style={{ height: '30px' }}>
					{this.props.value.length > 0 && this.props.value.length < 3 && (
						<div style={{ fontSize: '14px', color: '#B33D30' }}>
							name is too short
						</div>
					)}
					<p style={{ height: '30px', fontSize: '14px', color: 'grey' }}>
						{this.props.gender ? `gender – ${this.props.gender}` : ''}
					</p>
				</div>
			</div>
		);
	}
}

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: '', gender: '' };
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	onChangeInput(e) {
		this.setState({ value: e.target.value, gender: '' });
	}
	handleSubmit(e) {
		e.preventDefault();
		this.onSent()
	}
	async onSent() {
		try {
			const serverUrl = 'https://api.genderize.io';
			const res = await (
				await fetch(`${serverUrl}?name=${this.state.value}`)
			).json();
			this.setState({ gender: res.gender });
		} catch (e) {
			alert(e);
		}
	}
	render() {
		return (
			<div className='container'>
				<div>
					<h2>Enter a name</h2>
					<form onSubmit={this.handleSubmit}>
						<div className='d-flex jusitify-start align-start mt-1'>
							<TexInput
								value={this.state.value}
								gender={this.state.gender}
								label='Type a name'
								onChange={e => this.onChangeInput(e)}
							/>
							<Button label='Sent' className='ml-1 btn' />
						</div>
					</form>
				</div>
			</div>
		);
	}
}

root.render(<Main />);
