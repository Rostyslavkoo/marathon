import { UI_ELEMENTS } from './constants.js';
import { format } from 'date-fns';

scrollToBottom();

UI_ELEMENTS.DIALOGS.TARGET_DIALOGS.forEach(button => {
	button.addEventListener('click', () => {
		const modal = document.querySelector(button.dataset.modalTarget);
		closeAllModals();
		openModal(modal);
	});
});
UI_ELEMENTS.DIALOGS.CLOSE_DIALOGS.forEach(close_button => {
	close_button.addEventListener('click', () => {
		const modal = close_button.closest('.dialog');
		closeModal(modal);
	});
});
UI_ELEMENTS.DIALOGS.OVERLAY.addEventListener('click', () => {
	if (UI_ELEMENTS.DIALOGS.OVERLAY.classList.contains('block')) return;
	closeAllModals();
});
function closeAllModals() {
	const modals = document.querySelectorAll('.dialog.active');
	modals.forEach(modal => {
		closeModal(modal);
	});
}

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
export function createMessageBlock() {
	let msg = UI_ELEMENTS.INPUTS.MESSAGE.value;
	if (!msg) return;
	let element = document.createElement('div');
	element.append(UI_ELEMENTS.MESSAGE.TEMPLATE.content.cloneNode(true));
	element.querySelector('#msg-text').textContent = msg;
	element.querySelector('#author').textContent = 'me:';
	element.querySelector('#msg-time').textContent = format(new Date(), '	HH:mm');

	UI_ELEMENTS.MESSAGE.MSG_MAIN.append(element);
	clearInput(UI_ELEMENTS.INPUTS.MESSAGE);
	scrollToBottom();
}

function scrollToBottom() {
	document
		.querySelector('.wrapper')
		.scrollTo(0, document.querySelector('.wrapper').scrollHeight);
}

function clearInput(input) {
	input.value = '';
}

export function showConfirmation(){
	const modal = document.querySelector('#dialog-confirmation')
	openModal(modal)
}