import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import { getGenres } from './../../../../data/genres';
import Pagination from './../Pagination/PaginationComponent';
import { PageContext } from './../../../Main/context';
import { useContext } from 'react';

function SortedCheckboxList() {
	const checkboxValue = getGenres();
	const { page } = useContext(PageContext);
	return (
		<>
			<FormGroup sx={{ px: 1, minWidth: '100%' }}>
				{checkboxValue.map(checkbox => (
					<FormControlLabel
						key={checkbox.id}
						control={<Checkbox size='small' sx={{ py: '1px' }} />}
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
