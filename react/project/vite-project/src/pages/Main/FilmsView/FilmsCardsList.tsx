import FimlCard from './FilmCard';
import Grid from '@mui/material/Grid';
const films = [
	{
		rating: 1.5,
		title:
			'This impressive paella is a perfect party dish and a fun meal to cook   together with your guests. Add 1 cup of frozen peas along with the    mussels, if you like',
		path_img: 'https://source.unsplash.com/random/400x600?films',
	},
	{
		rating: 1.5,
		title:
			'This impressive paella is a perfect party dish and a fun meal to cook   together with your guests. Add 1 cup of frozen peas along with the    mussels, if you like',
		path_img: 'https://source.unsplash.com/random/400x600?films',
	},
	{
		rating: 1.5,
		title:
			'This impressive paella is a perfect party dish and a fun meal to cook   together with your guests. Add 1 cup of frozen peas along with the    mussels, if you like',
		path_img: 'https://source.unsplash.com/random/400x600?films',
	},
	{
		rating: 1.5,
		title:
			'This impressive paella is a perfect party dish and a fun meal to cook   together with your guests. Add 1 cup of frozen peas along with the    mussels, if you like',
		path_img: 'https://source.unsplash.com/random/400x600?films',
	},
	{
		rating: 1.5,
		title:
			'This impressive paella is a perfect party dish and a fun meal to cook   together with your guests. Add 1 cup of frozen peas along with the    mussels, if you like',
		path_img: 'https://source.unsplash.com/random/400x600?films',
	},
	{
		rating: 1.5,
		title:
			'This impressive paella is a perfect party dish and a fun meal to cook   together with your guests. Add 1 cup of frozen peas along with the    mussels, if you like',
		path_img: 'https://source.unsplash.com/random/400x600?films',
	},
];
function FilmsCardsList() {
	return (
		<>
			<Grid container rowSpacing={4} columnSpacing={5}>
				{films.map(film => (
					<Grid item xs={12} md={6}>
						<FimlCard film={film} />
					</Grid>
				))}
			</Grid>
		</>
	);
}
export default FilmsCardsList;
