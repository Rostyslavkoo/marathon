import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Clock extends React.Component {
  constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}

	componentDidMount() {
		this.timerId = setInterval(() => this.tick(), 1000);
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	tick() {
		this.setState({
			date: new Date(),
		});
	}
	render() {
		return (
			<div>
				<h1>Привіт, світе!</h1>
				<h2>Зараз {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}
function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}


root.render(<App/>);
