import { useParams } from 'react-router-dom';
import { getFilmById } from '@/data/films';
import Box from '@mui/material/Container';

function FilmDetailsComponent() {
	const { id } = useParams();
	const { poster_path, title, vote_average, overview } = getFilmById(id);
	const styles = {
		backgroundFilm: {
			height: '65vh',
			backgroundImage: `url(https://image.tmdb.org/t/p/w300${poster_path})`,
			backgroundSize: 'cover',
		},
	};
	return (
		<div>
			<div className='film-details-banner' style={styles.backgroundFilm}>
				<div className='film-details-data'>
					<div>
						<img
							src={`https://image.tmdb.org/t/p/w300${poster_path}`}
							height='400'
							alt=''
						/>
					</div>
					<div className='details-text'>
						<Box className='title'>{title}</Box>
						<Box sx={{ my: 1 }}>Рейтинг: {vote_average}</Box>
						<Box>{overview}</Box>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FilmDetailsComponent;
