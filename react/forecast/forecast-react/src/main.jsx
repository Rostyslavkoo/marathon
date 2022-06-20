import './assets/scss/common.scss';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import forecastApp from './redux/reducers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Info from './components/Info';
let store = createStore(forecastApp);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<div className='container'>
				<div className='container__wrapper'>
					<Routes>
						<Route path='/' element={<App />}></Route>
						<Route path='info' element={<Info />}></Route>
						<Route
							path='*'
							element={
								<main style={{ padding: '1rem' }}>
									<p>There's nothing here!</p>
								</main>
							}
						></Route>
					</Routes>
				</div>
			</div>
		</Provider>
	</BrowserRouter>
);
