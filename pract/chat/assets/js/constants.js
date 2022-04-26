const UI_ELEMENTS = {
	BUTTONS: {
		SETTINGS: document.querySelector('.btn-settings'),
	},
	DIALOGS: {
		TARGET_DIALOGS: document.querySelectorAll('[data-modal-target]'),
		CLOSE_DIALOGS: document.querySelectorAll('[data-modal-close]'),
		OVERLAY: document.querySelector('.overlay'),
	},
};

export { UI_ELEMENTS };
