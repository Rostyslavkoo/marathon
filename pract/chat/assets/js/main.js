import { UI_ELEMENTS, SERVER } from './constants.js';
import { createMessageBlock, showConfirmation } from './view.js';

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

async function sendRequest(url, params) {
	try {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(params),
		};

		const res = await fetch(url, options);
		if (res.status !== 200) {
			throw Error(res.statusText);
		}
		return await res.json();
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

	const res = await sendRequest(SERVER.URL, params);
	if (!res) return;
	showConfirmation();
}
