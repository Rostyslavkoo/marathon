import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SortedSelect from './FilterSorted/SortedSelect';
import SortedCheckboxList from './FilterSorted/SortedCheckboxList';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

import { PageContext,AutorisationContext } from '../../../context';
import { useContext } from 'react';
import { useSelector } from 'react-redux';

function FilterComponent() {
	const {  setOpenLoginDialog } = useContext(
		AutorisationContext
	);
	const { user } = useSelector(state => state);
	const isLogin = 'login' in user;
	const { setSortedValue, setReleaseYear, setFilterValues } =
		useContext(PageContext);
	function handleResetCLick() {
		setSortedValue('');
		setReleaseYear('');
		setFilterValues([]);
	}
	console.log(user);
	function handleFavourite() {
		if (!isLogin) {
			setOpenLoginDialog(true);
		}
	}
	function handleLater() {
		if (!isLogin) {
			setOpenLoginDialog(true);
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
				<IconButton color='primary' size='small' onClick={handleFavourite}>
					<StarBorderIcon />
				</IconButton>
				<IconButton color='primary' size='small' onClick={handleFavourite}>
					<BookmarkBorderOutlinedIcon />
				</IconButton>
			</Grid>
			<SortedCheckboxList />
		</Card>
	);
}
export default FilterComponent;
