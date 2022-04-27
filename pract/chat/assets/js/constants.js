const UI_ELEMENTS = {
	BUTTONS: {
		SETTINGS: document.querySelector('.btn-settings'),
		SENT_MESSAGE: document.querySelector('#send-message'),
		GET_CODE: document.querySelector('#get-code'),
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
	},
	MESSAGE: {
		MSG_MAIN: document.querySelector('#msg-main'),
		TEMPLATE: document.querySelector('#msg-block'),
	},
};
const SERVER = {
	URL: 'https://mighty-cove-31255.herokuapp.com/api/user',
};

export { UI_ELEMENTS, SERVER };
