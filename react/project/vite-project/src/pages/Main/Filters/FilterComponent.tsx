import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SortedSelect from './FilterSorted/SortedSelect';
import SortedCheckboxList from './FilterSorted/SortedCheckboxList';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import StarIcon from '@mui/icons-material/Star';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { AutorisationContext } from '@/context/autorisationContext';
import { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetFilters, setFilters } from '@/redux/reducers/filters';

function FilterComponent() {
	const dispatch = useDispatch();
	const { setOpenLoginDialog } = useContext(AutorisationContext);
	const { user } = useSelector(state => state);
	const { isLogin } = user;
	const { isLikedFilter, isLaterFilter } = useSelector(state => state.filters);

	function handleResetCLick() {
		dispatch(resetFilters());
	}
	useEffect(() => {
		if (!isLogin) {
			dispatch(
				setFilters({
					isLikedFilter: false,
					isLaterFilter: false,
				})
			);
		}
	}, [isLogin]);
	function handleLiked() {
		if (!isLogin) {
			setOpenLoginDialog(true);
		} else {
			dispatch(
				setFilters({
					isLikedFilter: !isLikedFilter,
				})
			);
		}
	}
	function handleLater() {
		if (!isLogin) {
			setOpenLoginDialog(true);
		} else {
			dispatch(
				setFilters({
					isLaterFilter: !isLaterFilter,
				})
			);
		}
	}
	return (
		<Card sx={{ minWidth: 275, py: 3, px: 2 }}>
			<Typography variant='h5' component='div'>
				Filters:
			</Typography>
			<Button color='primary' sx={{ width: '100%' }} onClick={handleResetCLick}>
				Reset all filters
			</Button>
			<SortedSelect />
			<Grid item>
				<IconButton color='primary' size='small' onClick={handleLiked}>
					{isLikedFilter ? <StarIcon /> : <StarBorderIcon />}
				</IconButton>
				<IconButton color='primary' size='small' onClick={handleLater}>
					{isLaterFilter ? <BookmarkIcon /> : <BookmarkBorderOutlinedIcon />}
				</IconButton>
			</Grid>
			<SortedCheckboxList />
		</Card>
	);
}
export default FilterComponent;
