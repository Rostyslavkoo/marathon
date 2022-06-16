import './assets/scss/common.scss';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import forecastApp from './redux/reducers';

let store = createStore(forecastApp);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App  />
	</Provider>
);
