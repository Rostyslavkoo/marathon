import { getInvoices } from './../data';
import { NavLink, Outlet, useSearchParams,useLocation } from 'react-router-dom';

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

export default function Invoices() {
	let invoices = getInvoices();
	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<main style={{ padding: '1rem 0' }}>
			<input
				value={searchParams.get('invoice') || ''}
				onChange={event => {
					let invoice = event.target.value;
					if (invoice) {
						setSearchParams({ invoice });
					} else {
						setSearchParams({});
					}
				}}
			/>
			{invoices
				.filter(invoice => {
					const filter = searchParams.get('invoice');
					if (!filter) return true;
					const name = invoice.name.toLowerCase();
					return name.startsWith(filter.toLowerCase());
				})
				.map(invoice => (
					<QueryNavLink
						style={({ isActive }) => {
							return {
								display: 'block',
								margin: '1rem 0',
								color: isActive ? 'red' : '',
							};
						}}
						to={`/invoices/${invoice.number}`}
						key={invoice.number}
					>
						{invoice.name}
					</QueryNavLink>
				))}
			<h2>Invoices</h2>
			<Outlet />
		</main>
	);
}
