import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FilterComponent from './Filters/FilterComponent';
import FilmsViewComponent from './FilmsView/FilmsViewComponent';

function MainPage() {
	return (
		<div>
			<Container sx={{ mt: 2 }} maxWidth='xl'>
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
			</Container>
		</div>
	);
}
export default MainPage;
