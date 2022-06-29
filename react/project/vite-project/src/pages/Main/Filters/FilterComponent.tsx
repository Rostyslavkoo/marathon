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

import { PageContext, AutorisationContext } from '../../../context';
import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';

function FilterComponent() {
	const { setOpenLoginDialog } = useContext(AutorisationContext);
	const { user } = useSelector(state => state);
	const isLogin = 'login' in user;
	const {
		setSortedValue,
		setReleaseYear,
		setFilterValues,
		isLikedFilter,
		setIsLikedFilter,
		isLaterFilter,
		setIsLaterFilter,
	} = useContext(PageContext);
	
	function resetFilters() {
		setSortedValue('');
		setReleaseYear('');
		setFilterValues([]);
		setIsLaterFilter(false);
		setIsLikedFilter(false);
	}
	function handleResetCLick() {
		resetFilters();
	}
	useEffect(() => {
		if (!isLogin) {
			setIsLaterFilter(false);
			setIsLikedFilter(false);
		}
	}, [isLogin]);
	function handleLiked() {
		if (!isLogin) {
			setOpenLoginDialog(true);
		} else {
			console.log(isLikedFilter);
			setIsLikedFilter(!isLikedFilter);
		}
	}
	function handleLater() {
		if (!isLogin) {
			setOpenLoginDialog(true);
		} else {
			setIsLaterFilter(!isLaterFilter);
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
