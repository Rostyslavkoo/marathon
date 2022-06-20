import './assets/scss/common.scss';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import forecastApp from './redux/reducers';
import App from './App';
let store = createStore(forecastApp);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<div className='container'>
			<div className='container__wrapper'>
				<App />
			</div>
		</div>
	</Provider>
);
