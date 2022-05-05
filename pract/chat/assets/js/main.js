import { UI_ELEMENTS, SERVER, USER, PAGINATE } from './constants.js';
import {
	createMessageBlock,
	showConfirmation,
	closeAllModals,
	createMessageBlocks,
	openModal,
} from './view.js';
import Cookies from 'js-cookie';
import requestService from './requestService.js';
import { ar } from 'date-fns/locale';

const SOCKET = new WebSocket(
	`wss://mighty-cove-31255.herokuapp.com/websockets?${getCookie(
		SERVER.COOKIE_TOKEN_NAME
	)}`
);

export function isAutorised() {
	return getCookie(SERVER.COOKIE_TOKEN_NAME);
}

UI_ELEMENTS.BUTTONS.SENT_MESSAGE.addEventListener('click', event => {
	sendMessage();
	UI_ELEMENTS.INPUTS.MESSAGE.focus();
});
UI_ELEMENTS.INPUTS.MESSAGE.addEventListener('keypress', event => {
	if (event.keyCode === 13) {
		sendMessage();
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
UI_ELEMENTS.BUTTONS.LOG_OUT.addEventListener('click', event => {
	clearCookie(SERVER.COOKIE_TOKEN_NAME);
	UI_ELEMENTS.MESSAGE.MSG_MAIN.querySelectorAll('.msg-block').forEach(msg =>
		msg.remove()
	);
	checkAutoridation();
});

UI_ELEMENTS.MESSAGE.MSG_MAIN.addEventListener('scroll', event => {
	if (UI_ELEMENTS.MESSAGE.MSG_MAIN.scrollTop === 0) {
		const block =
			UI_ELEMENTS.MESSAGE.MSG_MAIN.querySelectorAll('.msg-block')[0];
		setTimeout(() => {
			createMessageBlocks(onPaginate(SERVER.HISTORY), true, block);
		}, 1000);
	}
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
		await requestService.patch(SERVER.URL, options);
		await getUserData();
		UI_ELEMENTS.INPUTS.CHAT_NAME.value = '';
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
		if (await getUserData()) {
			UI_ELEMENTS.INPUTS.CONFIRMATION_COD.value = '';
			closeAllModals();
			await uploadMessages();
			UI_ELEMENTS.INPUTS.MESSAGE.removeAttribute('disabled');
		} else {
			clearCookie(SERVER.COOKIE_TOKEN_NAME, token);
		}
	} catch (e) {
		alert(e);
	}
}
async function getUserData() {
	try {
		const res = await requestService.get(
			'https://mighty-cove-31255.herokuapp.com/api/user/me'
		);
		if (!res) return;
		USER.name = res?.name;
		USER.id = res?._id;
		USER.email = res?.email;
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

async function uploadMessages() {
	try {
		const res = await requestService.get(
			'https://mighty-cove-31255.herokuapp.com/api/messages'
		);
		SERVER.HISTORY = res.messages;
		createMessageBlocks(onPaginate(SERVER.HISTORY));
	} catch (e) {
		alert(e);
	}
}
function checkAutoridation() {
	if (isAutorised()) {
		getUserData();
		uploadMessages();
		UI_ELEMENTS.INPUTS.MESSAGE.removeAttribute('disabled');
	} else {
		openModal(document.querySelector('#dialog-autorisation'));
	}
}

async function sendMessage() {
	let msg_text = UI_ELEMENTS.INPUTS.MESSAGE.value;
	if (!msg_text) return;
	SOCKET.send(
		JSON.stringify({
			text: msg_text,
		})
	);
}
SOCKET.onopen = function (e) {
	console.log(e);
};

SOCKET.onmessage = function (e) {
	const message = JSON.parse(e.data);
	createMessageBlock(message);
};

SOCKET.onerror = function (error) {
	alert(`[error] ${error.message}`);
};

SOCKET.onclose = function (e) {
	alert(`[close] ${e}`);
};

export function onPaginate(arr) {
	// if (arr.length - PAGINATE.OFFSET <= 0) {
	// 	alert('the end');
	// 	return;
	// }
	PAGINATE.OFFSET = PAGINATE.PAGE * PAGINATE.LIMIT;
	PAGINATE.PAGE++;
	return arr.slice(
		arr.length - PAGINATE.OFFSET,
		arr.length - PAGINATE.OFFSET + PAGINATE.LIMIT
	);
}

checkAutoridation();
