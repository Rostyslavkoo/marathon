import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginDialog from '@/pages/Login/LoginDialog';
import { removeUserData } from '@/redux/reducers/user';
import { AutorisationContext } from '@/context/autorisationContext';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
function Header() {
	const dispatch = useDispatch();
	const { openLoginDialog, setOpenLoginDialog } =
		useContext(AutorisationContext);
	const handleClickOpen = () => {
		if (isLogin) {
			dispatch(removeUserData());
			localStorage.removeItem('user');
		} else {
			setOpenLoginDialog(true);
		}
	};
	const { user } = useSelector(state => state);

	const isLogin = 'login' in user;
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar variant='dense'>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						<Link to='/'>Home</Link>
					</Typography>
					<Box
						sx={{
							alignItems: 'center',
							display: 'flex',
							justifyContent: 'space-bentween',
						}}
					>
						<Link to='/search'>
							<SearchIcon sx={{ mx: 3 }} fontSize='small' />
						</Link>
						<Button
							color={isLogin ? 'error' : 'success'}
							variant='contained'
							size='small'
							onClick={handleClickOpen}
						>
							{isLogin ? 'Log out' : 'Log in'}
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
			<LoginDialog
				open={openLoginDialog}
				setOpenLoginDialog={setOpenLoginDialog}
			/>
		</Box>
	);
}

export default Header;
