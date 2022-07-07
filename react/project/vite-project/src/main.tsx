import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/scss/common.scss';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './redux/reducers';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore({
	reducer:rootReducer,
});
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
