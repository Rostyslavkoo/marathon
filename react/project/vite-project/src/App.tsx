import Header from './UI/Header';
import MainPage from './pages/Main/MainPage';
import { useState } from 'react';
import { AutorisationContext } from './context';

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
				<MainPage />
			</AutorisationContext.Provider>
		</div>
	);
}

export default App;
