import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SortedSelect from './FilterSorted/SortedSelect';
import SortedCheckboxList from './FilterSorted/SortedCheckboxList';

function FilterComponent() {
	return (
		<Card sx={{ minWidth: 275, py: 3, px: 2 }}>
			<Typography variant='h5' component='div'>
				Filters:
			</Typography>
			<Button color='primary' sx={{ width: '100%' }}>
				Reset all filters
			</Button>
			<SortedSelect />
			<SortedCheckboxList />
		</Card>
	);
}
export default FilterComponent;
