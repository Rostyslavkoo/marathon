import Pagination from '@mui/material/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { setFilters } from '@/redux/reducers/filters';

function PaginationComponent() {
	const dispatch = useDispatch();
	const { page, paginationLength } = useSelector(state => state.filters);
	const handleChangePage = (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		dispatch(setFilters({ page: value }));
	};
	return (
		<Pagination
			count={paginationLength}
			boundaryCount={1}
			page={page}
			shape='rounded'
			onChange={handleChangePage}
			color='primary'
		/>
	);
}
export default PaginationComponent;
