import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WeatherPage from './pages/weatherPage/WeatherComponent';
import InfoPage from './pages/InfoPage';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<WeatherPage />}></Route>
				<Route path='info' element={<InfoPage />}></Route>
				<Route
					path='*'
					element={
						<main style={{ padding: '1rem' }}>
							<p>There's nothing here!</p>
						</main>
					}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
