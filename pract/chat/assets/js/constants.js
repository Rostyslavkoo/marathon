const UI_ELEMENTS = {
	BUTTONS: {
		SETTINGS: document.querySelector('.btn-settings'),
		SENT_MESSAGE: document.querySelector('#send-message'),
		GET_CODE: document.querySelector('#get-code'),
		ENTER_CODE: document.querySelector('#enter-code'),
		SEND_USER_NAME: document.querySelector('#send-user-name'),
	},
	DIALOGS: {
		TARGET_DIALOGS: document.querySelectorAll('[data-modal-target]'),
		CLOSE_DIALOGS: document.querySelectorAll('[data-modal-close]'),
		OVERLAY: document.querySelector('.overlay'),
	},
	INPUTS: {
		MESSAGE: document.querySelector('#message'),
		AUTORISATION_EMAIL: document.querySelector('#autorisation-email'),
		CONFIRMATION_COD: document.querySelector('#confirmation-cod'),
		CHAT_NAME: document.querySelector('#settings-chat-name'),
	},
	MESSAGE: {
		MSG_MAIN: document.querySelector('#msg-main'),
		TEMPLATE: document.querySelector('#msg-block'),
	},
};
const USER = {};
const SERVER = {
	URL: 'https://mighty-cove-31255.herokuapp.com/api/user',
	COOKIE_TOKEN_NAME: 'autorization_token',
};

export { UI_ELEMENTS, SERVER, USER };
