import FimlCard from './FilmCard';
import Grid from '@mui/material/Grid';
import {
	getFilms,
	getFimsLength,
	PaginationOptions,
} from './../../../data/films';
import { PageContext } from './../../Main/context';
import { useContext } from 'react';

function FilmsCardsList() {
	const { page, sortedValue, releaseYear,filterValues } = useContext(PageContext);
	const films = getFilms({
		page: page,
		sorted_by: sortedValue,
		release_year: releaseYear,
		filterValues:filterValues
	});
	return (
		<>
			<Grid container rowSpacing={4} columnSpacing={5}>
				{films.map((film: any, key: number) => (
					<Grid item xs={12} md={6} key={key}>
						<FimlCard film={film} />
					</Grid>
				))}
			</Grid>
		</>
	);
}
export default FilmsCardsList;
