import SearchForm from './searchForm';
import FilmPreview from './filmPreview';
import Container from '@mui/material/Container';
import { getSearchedFilms } from '@/data/films';
import { getGenres } from '@/data/genres';
import { useState } from 'react';

function SearchComponent() {
	const [searchedFilms, setSearchedfilms] = useState([]);
	const [isSearched, setIsSearched] = useState(false);

	function handleSearchedParams(params: any) {
		setIsSearched(true);

		setSearchedfilms(getSearchedFilms(params, getGenres()));
	}
	function resetParams() {
		setSearchedfilms([]);
		setIsSearched(false);
	}
	return (
		<Container maxWidth='md' sx={{ mt: 2 }}>
			<SearchForm
				searchedParams={handleSearchedParams}
				resetParams={resetParams}
			/>
			{searchedFilms.length && isSearched ? (
				<FilmPreview searchedFilms={searchedFilms} />
			) : (
				''
			)}
            
			{!searchedFilms.length && isSearched ? 'noData' : ''}
		</Container>
	);
}
export default SearchComponent;
