import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserData } from './../../redux/actions';


function LoginDialgo({
	open,
	setOpenLoginDialog,
}: {
	open: boolean;
	setOpenLoginDialog: any;
}) {

	const dispatch = useDispatch();
	const [login, setLogin] = useState('Rostyk');
	const [password, setPassword] = useState('123');
	const handleClose = () => {
		setOpenLoginDialog(false);
	};

	const handleLogin = () => {
		const user = {
			login: login,
			password: password,
		};
		localStorage.user = JSON.stringify(user);
		dispatch(setUserData(user));
		handleClose();
	};

	return (
		<div>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Autorisation</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						margin='dense'
						id='login'
						label='login'
						type='email'
						value={login}
						fullWidth
						size='small'
					/>
					<TextField
						autoFocus
						margin='dense'
						id='password'
						label='Password'
						type='password'
						value={password}
						size='small'
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleLogin}>Sign in</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
export default LoginDialgo;
