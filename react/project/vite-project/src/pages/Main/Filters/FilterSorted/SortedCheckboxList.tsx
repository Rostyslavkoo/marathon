import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';

const checkboxValue = [
	{
		id: 28,
		name: 'боевик',
	},
	{
		id: 12,
		name: 'приключения',
	},
	{
		id: 16,
		name: 'мультфильм',
	},
	{
		id: 35,
		name: 'комедия',
	},
	{
		id: 80,
		name: 'криминал',
	},
	{
		id: 99,
		name: 'документальный',
	},
	{
		id: 18,
		name: 'драма',
	},
	{
		id: 10751,
		name: 'семейный',
	},
	{
		id: 14,
		name: 'фэнтези',
	},
	{
		id: 36,
		name: 'история',
	},
	{
		id: 27,
		name: 'ужасы',
	},
	{
		id: 10402,
		name: 'музыка',
	},
	{
		id: 9648,
		name: 'детектив',
	},
	{
		id: 10749,
		name: 'мелодрама',
	},
	{
		id: 878,
		name: 'фантастика',
	},
	{
		id: 10770,
		name: 'телевизионный фильм',
	},
	{
		id: 53,
		name: 'триллер',
	},
	{
		id: 10752,
		name: 'военный',
	},
	{
		id: 37,
		name: 'вестерн',
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
