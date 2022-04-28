import { UI_ELEMENTS, SERVER } from './constants.js';
import {
	createMessageBlock,
	showConfirmation,
	closeAllModals,
} from './view.js';
import Cookies from 'js-cookie';
import requestService from './requestService.js';

UI_ELEMENTS.BUTTONS.SENT_MESSAGE.addEventListener('click', event => {
	createMessageBlock();
	UI_ELEMENTS.INPUTS.MESSAGE.focus();
});
UI_ELEMENTS.INPUTS.MESSAGE.addEventListener('keypress', event => {
	if (event.keyCode === 13) {
		createMessageBlock();
		UI_ELEMENTS.INPUTS.MESSAGE.focus();
	}
});
UI_ELEMENTS.BUTTONS.GET_CODE.addEventListener('click', () => {
	getCode();
});
UI_ELEMENTS.INPUTS.AUTORISATION_EMAIL.addEventListener('keypress', event => {
	if (event.keyCode === 13) {
		getCode();
	}
});
UI_ELEMENTS.BUTTONS.ENTER_CODE.addEventListener('click', () => {
	confirmCode();
});
UI_ELEMENTS.INPUTS.CONFIRMATION_COD.addEventListener('keypress', event => {
	if (event.keyCode === 13) {
		confirmCode();
	}
});
UI_ELEMENTS.INPUTS.CHAT_NAME.addEventListener('keypress', event => {
	if (event.keyCode === 13) {
		changeChatName();
	}
});
UI_ELEMENTS.BUTTONS.SEND_USER_NAME.addEventListener('click', () => {
	changeChatName();
});

async function changeChatName() {
	try {
		const name = UI_ELEMENTS.INPUTS.CHAT_NAME.value;
		if (!name) {
			alert('enter a name');
			return;
		}
		const options = {
			name: name,
		};
		const res = await requestService.patch(SERVER.URL, options);
		console.log(await getUserData());
		UI_ELEMENTS.INPUTS.CHAT_NAME.value = ''
		closeAllModals();
	} catch (e) {
		alert(e);
	}
}
async function getCode() {
	const params = {
		email: UI_ELEMENTS.INPUTS.AUTORISATION_EMAIL.value,
	};
	if (!params.email) {
		alert('Enter an email');
		return;
	}
	try {
		await requestService.post(SERVER.URL, params);
		showConfirmation();
	} catch (e) {
		alert(e);
	}
}
async function confirmCode() {
	try {
		const token = UI_ELEMENTS.INPUTS.CONFIRMATION_COD.value;
		if (!token) {
			alert('Enter a code');
			return;
		}
		setCookie(SERVER.COOKIE_TOKEN_NAME, token);
		console.log(await getUserData());
		UI_ELEMENTS.INPUTS.CONFIRMATION_COD.value = '';
		closeAllModals();
	} catch (e) {
		alert(e);
	}
}
async function getUserData() {
	try {
		const res = requestService.get(
			'https://mighty-cove-31255.herokuapp.com/api/user/me'
		);
		return res;
	} catch (e) {
		alert(e);
	}
}
function setCookie(name, value, options = {}) {
	Cookies.set(name, value, options);
}
export function getCookie(name) {
	return Cookies.get(name);
}
function clearCookie(name) {
	Cookies.remove(name);
}
