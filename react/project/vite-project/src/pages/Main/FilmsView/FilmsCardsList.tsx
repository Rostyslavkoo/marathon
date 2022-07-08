import FimlCard from './FilmCard';
import Grid from '@mui/material/Grid';
import {
	getFilms,
	UpdateLikedFilm,
	UpdateSeeLater,
	resetLikedAndLater,
} from '@/data/films';
import { AutorisationContext } from '@/context/autorisationContext';
import { FilterContext } from '@/context/filtersContext';
import { useContext, useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';

function FilmsCardsList() {
	const dispatch = useDispatch()
	const { setOpenLoginDialog } = useContext(AutorisationContext);
	const {
		page,
		sortedValue,
		releaseYear,
		filterValues,
		isLaterFilter,
		isLikedFilter,
	} = useSelector(state => state.filters);

	const params = {
		page: page,
		sorted_by: sortedValue,
		release_year: releaseYear,
		filterValues: filterValues,
		isLikedFilter: isLikedFilter,
		isLaterFilter: isLaterFilter,
	};

	const [films, setFilms] = useState(getFilms(params));
	const { user } = useSelector(state => state);
	const { isLogin } = user;

	useEffect(() => {
		if (!isLogin) {
			resetLikedAndLater();
		}
		setFilms(getFilms(params));
	}, [
		page,
		sortedValue,
		releaseYear,
		filterValues,
		isLikedFilter,
		isLaterFilter,
		isLogin,
	]);
	function addToSeeLater(id: number) {
		if (!isLogin) {
			setOpenLoginDialog(true);
		} else {
			UpdateSeeLater(id);
			setFilms(getFilms(params));
		}
	}
	function addToLiked(id: number) {
		if (!isLogin) {
			setOpenLoginDialog(true);
		} else {
			UpdateLikedFilm(id);
			setFilms(getFilms(params));
		}
	}

	return (
		<>
			<Grid container rowSpacing={4} columnSpacing={5}>
				{films.map((film: any, key: number) => (
					<Grid item xs={12} md={6} key={key}>
						<FimlCard
							film={film}
							addToSeeLater={addToSeeLater}
							addToLiked={addToLiked}
						/>
					</Grid>
				))}
			</Grid>
		</>
	);
}
export default FilmsCardsList;
