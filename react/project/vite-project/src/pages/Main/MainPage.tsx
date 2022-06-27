import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FilterComponent from './Filters/FilterComponent';
import FilmsViewComponent from './FilmsView/FilmsViewComponent';
import { useState, useEffect } from 'react';
import { PageContext } from './../../context';
import { getFimsLength, PaginationOptions } from './../../data/films';
import { getSortedCONSTANS } from './../../data/sorted';

function MainPage() {
	const [page, setPage] = useState(1);
	const [paginationLength, setPaginationLength] = useState(1);

	const [sortedValue, setSortedValue] = useState(getSortedCONSTANS().DEFAULT);
	const [releaseYear, setReleaseYear] = useState(2020);
	const [filterValues, setFilterValues] = useState([]);
	useEffect(() => {
		setPaginationLength(Math.round(getFimsLength() / PaginationOptions.limit));
	}, [releaseYear, filterValues]);
	return (
		<div>
			<Container sx={{ mt: 2 }} maxWidth='xl'>
				<PageContext.Provider
					value={{
						page: page,
						setPage: setPage,
						paginationLength,
						setPaginationLength,
						sortedValue: sortedValue,
						setSortedValue: setSortedValue,
						releaseYear: releaseYear,
						setReleaseYear: setReleaseYear,
						filterValues: filterValues,
						setFilterValues: setFilterValues,
					}}
				>
					<Grid
						container
						spacing={2}
						direction='row'
						justifyContent='space-between'
					>
						<Grid item xs={4}>
							<FilterComponent />
						</Grid>
						<Grid item xs={8}>
							<FilmsViewComponent />
						</Grid>
					</Grid>
				</PageContext.Provider>
			</Container>
		</div>
	);
}
export default MainPage;
