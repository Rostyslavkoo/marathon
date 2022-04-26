const UI_ELEMENTS = {
	BUTTONS: {
		SETTINGS: document.querySelector('.btn-settings'),
		SENT_MESSAGE:document.querySelector('#send-message')
	},
	DIALOGS: {
		TARGET_DIALOGS: document.querySelectorAll('[data-modal-target]'),
		CLOSE_DIALOGS: document.querySelectorAll('[data-modal-close]'),
		OVERLAY: document.querySelector('.overlay'),
	},
	INPUTS:{
		MESSAGE:document.querySelector('#message')
	},
	MESSAGE:{
		MSG_MAIN:document.querySelector('#msg-main'),
		TEMPLATE:document.querySelector('#msg-block')
	}
};

export { UI_ELEMENTS };
