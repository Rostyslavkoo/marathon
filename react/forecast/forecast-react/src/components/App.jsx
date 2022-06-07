import Header from './Header';
import TabsComponent from './tabs/TabsComponent';
import FavouriteComponent from './favouriteList/FavouriteComponent';
function App() {
	return (
		<div className='container'>
			<div className='container__wrapper'>
				<Header />
				<div className='content'>
					<TabsComponent />
					<FavouriteComponent />
				</div>
			</div>
		</div>
	);
}

export default App;
