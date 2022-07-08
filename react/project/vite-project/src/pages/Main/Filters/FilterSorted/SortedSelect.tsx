import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { getSortedYears, getSortedData } from '@/data/sorted';
import { setFilters } from '@/redux/reducers/filters';
import { useSelector, useDispatch } from 'react-redux';

function SortedSelect() {
	const dispatch = useDispatch();
	const { sortedValue, releaseYear } = useSelector(state => state.filters);

	const handleChangeSorted = (event: any) => {
		dispatch(
			setFilters({
				sortedValue: event.target.value as string,
			})
		);
	};
	const handleChangeYear = (event: any) => {
		dispatch(
			setFilters({
				releaseYear: event.target.value as any,
			})
		);
	};

	return (
		<>
			<FormControl sx={{ p: 1, minWidth: '100%' }}>
				<TextField
					label='Sorted by:'
					select
					value={sortedValue}
					onChange={handleChangeSorted}
					size='small'
					defaultValue='choose'
					id='select-sorted'
				>
					{getSortedData().map(sorted => (
						<MenuItem key={sorted.value} value={sorted.value}>
							{' '}
							{sorted.label}
						</MenuItem>
					))}
				</TextField>
			</FormControl>
			<FormControl sx={{ p: 1, minWidth: '100%' }}>
				<TextField
					id='select-year'
					label='Year of release:'
					select
					value={releaseYear}
					onChange={handleChangeYear}
					size='small'
				>
					{getSortedYears().map(year => (
						<MenuItem key={year} value={year}>
							{year}
						</MenuItem>
					))}
				</TextField>
			</FormControl>
		</>
	);
}

export default SortedSelect;
