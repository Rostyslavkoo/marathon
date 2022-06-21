import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';

const checkboxValue = [
	{
		value: 'science-fiction',
		label: 'Science Fiction',
	},
	{
		value: 'war',
		label: 'War',
	},
	{
		value: 'westerns',
		label: 'Westerns',
	},
	{
		value: 'drama',
		label: 'Drama',
	},
	{
		value: 'crime-gangster',
		label: 'Crime & Gangster',
	},
];
function SortedCheckboxList() {
	const [page, setPage] = useState(1);
	const handleChangePage = (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		setPage(value);
	};

	return (
		<>
			<FormGroup sx={{ p: 1, minWidth: '100%' }}>
				{checkboxValue.map(checkbox => (
					<FormControlLabel
						key={checkbox.value}
						control={<Checkbox size='small' />}
						label={checkbox.label}
					/>
				))}
			</FormGroup>
			<FormGroup sx={{ p: 1, minWidth: '100%' }}>
				<Pagination
					count={9}
					boundaryCount={3}
					page={page}
					shape='rounded'
					onChange={handleChangePage}
					color='primary'
				/>
				<Typography sx={{ m: 'auto' }}>Page: {page}</Typography>
			</FormGroup>
		</>
	);
}

export default SortedCheckboxList;
