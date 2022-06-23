import Pagination from '@mui/material/Pagination';
import { PageContext } from './../../../Main/context';
import { useContext } from 'react';
function PaginationComponent() {
	const { page, setPage, paginationLength } = useContext(PageContext);
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
