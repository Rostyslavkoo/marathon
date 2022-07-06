import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const root = ReactDOM.createRoot(document.getElementById('root'));
const loggerMiddleware = createLogger();
const store = createStore(
	rootReducer,
	applyMiddleware(
		thunkMiddleware, // позволяет нам отправлять функции
		loggerMiddleware // аккуратно логируем экшены
	)
);
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
