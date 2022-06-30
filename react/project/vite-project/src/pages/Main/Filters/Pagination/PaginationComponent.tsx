import Pagination from '@mui/material/Pagination';
import { FilterContext } from '@/context/filtersContext';
import { useContext } from 'react';
function PaginationComponent() {
	const { page, setPage, paginationLength } = useContext(FilterContext);
	const handleChangePage = (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		setPage(value);
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
