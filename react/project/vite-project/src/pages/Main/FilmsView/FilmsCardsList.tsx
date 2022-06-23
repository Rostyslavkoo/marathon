import FimlCard from './FilmCard';
import Grid from '@mui/material/Grid';
import { getFilms, getFimsLength ,PaginationOptions} from './../../../data/films';
import { PageContext } from './../../Main/context';
import { useContext } from 'react';

function FilmsCardsList() {
	const { page, setPaginationLength } = useContext(PageContext);
	const films = getFilms(page);
	return (
		<>
			<Grid container rowSpacing={4} columnSpacing={5}>
				{films.map(film => (
					<Grid item xs={12} md={6} key={film.id}>
						<FimlCard film={film} />
					</Grid>
				))}
			</Grid>
		</>
	);
}
export default FilmsCardsList;
