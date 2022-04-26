import { UI_ELEMENTS } from './constants.js';

UI_ELEMENTS.DIALOGS.TARGET_DIALOGS.forEach(button => {
	button.addEventListener('click', () => {
		const modal = document.querySelector(button.dataset.modalTarget);
		openModal(modal);
	});
});
UI_ELEMENTS.DIALOGS.CLOSE_DIALOGS.forEach(close_button => {
	close_button.addEventListener('click', () => {
		const modal = close_button.closest('.dialog');
		closeModal(modal);
	});
});
UI_ELEMENTS.DIALOGS.OVERLAY.addEventListener('click', event => {
	const modals = document.querySelectorAll('.dialog.active');
	modals.forEach(modal => {
		closeModal(modal);
	});
});

function openModal(modal) {
	if (modal === null) return;
	modal.classList.add('active');
	UI_ELEMENTS.DIALOGS.OVERLAY.classList.add('active');
}

function closeModal(modal) {
	if (modal === null) return;
	modal.classList.remove('active');
	UI_ELEMENTS.DIALOGS.OVERLAY.classList.remove('active');
}
