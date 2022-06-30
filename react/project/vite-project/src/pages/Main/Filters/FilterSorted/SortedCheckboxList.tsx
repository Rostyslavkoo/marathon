import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import { getGenres } from '@/data/genres';
import Pagination from './../Pagination/PaginationComponent';
import { FilterContext } from '@/context/filtersContext';
import { useContext } from 'react';

function SortedCheckboxList() {
	const checkboxValue = getGenres();
	const { page, filterValues, setFilterValues } = useContext(FilterContext);
	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		if (!event.target.checked) {
			setFilterValues(filterValues.filter((item:any) => item != event.target.name));
		} else {
			setFilterValues([...filterValues, event.target.name]);
		}
	}
	return (
		<>
			<FormGroup sx={{ px: 1, minWidth: '100%' }}>
				{checkboxValue.map(checkbox => (
					<FormControlLabel
						key={checkbox.id}
						control={
							<Checkbox
								size='small'
								name={checkbox.id.toString()}
								checked={
									!!filterValues.find((item:any) => item == checkbox.id.toString())
								}
								onChange={handleChange}
								sx={{ py: '1px' }}
							/>
						}
						label={checkbox.name}
					/>
				))}
			</FormGroup>
			<FormGroup sx={{ p: 1, minWidth: '100%' }}>
				<Pagination />
				<Typography sx={{ m: 'auto' }}>Page: {page}</Typography>
			</FormGroup>
		</>
	);
}

export default SortedCheckboxList;
