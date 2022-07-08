import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FilterComponent from './Filters/FilterComponent';
import FilmsViewComponent from './FilmsView/FilmsViewComponent';
import { useEffect } from 'react';
import { getFimsLength, PaginationOptions } from '@/data/films';
import { setFilters } from '@/redux/reducers/filters';
import { useDispatch, useSelector } from 'react-redux';

function MainPage() {
	const dispatch = useDispatch();

	const {
		paginationLength,
		releaseYear,
		filterValues,
		isLikedFilter,
		isLaterFilter,
	} = useSelector(state => state.filters);

	useEffect(() => {
		dispatch(
			setFilters({
				paginationLength: Math.round(getFimsLength() / PaginationOptions.limit),
			})
		);
	}, [
		releaseYear,
		filterValues,
		isLikedFilter,
		isLaterFilter,
		paginationLength,
	]);
	document.title = 'FILMS | Main Page';

	return (
		<div>
			<Container sx={{ mt: 2 }} maxWidth='xl'>
				<Grid
					container
					spacing={3}
					direction='row'
					justifyContent='space-between'
				>
					<Grid item xs={3}>
						<FilterComponent />
					</Grid>
					<Grid item xs={9}>
						<FilmsViewComponent />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
export default MainPage;
