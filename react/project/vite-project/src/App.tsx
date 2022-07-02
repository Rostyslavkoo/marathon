import Header from './UI/Header';
import MainPage from './pages/Main/MainPage';
import FilmDetailsPage from './pages/FilmDetails/FilmDetailsComponent';
import { useState } from 'react';
import { AutorisationContext } from '@/context/autorisationContext';
import { Routes, Route } from 'react-router-dom';
import SearchComponent from './pages/search/searchComponent';

function App() {
	const [openLoginDialog, setOpenLoginDialog] = useState(false);
	return (
		<div>
			<AutorisationContext.Provider
				value={{
					openLoginDialog: openLoginDialog,
					setOpenLoginDialog: setOpenLoginDialog,
				}}
			>
				<Header />
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='film-about-:id'element={<FilmDetailsPage />} />
					<Route path='search'element={<SearchComponent />} />
				</Routes>
			</AutorisationContext.Provider>
		</div>
	);
}

export default App;
