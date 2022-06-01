import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>Вода закипить.</p>;
	}
	return <p>Вода не закипить.</p>;
}

const scaleNames = {
	c: 'Цельсій',
	f: 'Фаренгейт',
};
class TemperatureInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = { temperature: '' };
	}

	handleChange(e) {
		this.props.onTemperatureChange(e.target.value);
	}

	render() {
		const temperature = this.props.temperature;
		const scale = this.props.scale;
		return (
			<fieldset>
				<legend>Введіть температуру в градусах {scaleNames[scale]}:</legend>
				<input value={temperature} onChange={this.handleChange} />
			</fieldset>
		);
	}
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) {
		return '';
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}
function toCelsius(fahrenheit) {
	return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
	return (celsius * 9) / 5 + 32;
}
class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = { temperature: '', scale: 'c' };
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
	}

	handleCelsiusChange(temperature) {
		this.setState({ scale: 'c', temperature });
	}

	handleFahrenheitChange(temperature) {
		this.setState({ scale: 'f', temperature });
	}

	render() {
		const scale = this.state.scale;
		const temperature = this.state.temperature;
		const celsius =
			scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
		const fahrenheit =
			scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
		return (
			<div>
				<TemperatureInput
					scale='c'
					temperature={celsius}
					onTemperatureChange={this.handleCelsiusChange}
				/>
				<TemperatureInput
					scale='f'
					temperature={fahrenheit}
					onTemperatureChange={this.handleFahrenheitChange}
				/>
				<BoilingVerdict celsius={parseFloat(celsius)} />
			</div>
		);
	}
}

root.render(<Calculator></Calculator>);
