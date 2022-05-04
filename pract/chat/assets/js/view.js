import { UI_ELEMENTS, USER } from './constants.js';
import { format } from 'date-fns';
import parseISO from 'date-fns/parseISO';
import { ta } from 'date-fns/locale';
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
export function closeAllModals() {
	const modals = document.querySelectorAll('.dialog.active');
	modals.forEach(modal => {
		closeModal(modal);
	});
	f;
}

export function openModal(modal) {
	if (modal === null) return;
	modal.classList.add('active');
	UI_ELEMENTS.DIALOGS.OVERLAY.classList.add('active');
}

function closeModal(modal) {
	if (modal === null) return;
	modal.classList.remove('active');
	UI_ELEMENTS.DIALOGS.OVERLAY.classList.remove('active');
}

export function createMessageBlock(
	{ text, createdAt, user: { name, email } },
	paginate
) {
	const isAuthor = email === USER?.email;
	let element = document.createElement('div');
	element.append(UI_ELEMENTS.MESSAGE.TEMPLATE.content.cloneNode(true));
	element.querySelector('#msg-text').textContent = text;
	element.querySelector('#author').textContent = `${name}:`;
	if (isAuthor) {
		element.querySelector('.msg-block').classList.add('author', 'sent-msg');
	}
	element.querySelector('#msg-time').textContent = format(
		parseISO(createdAt),
		'	HH:mm'
	);
	if (paginate) {
		UI_ELEMENTS.MESSAGE.MSG_MAIN.prepend(element);
	} else {
		UI_ELEMENTS.MESSAGE.MSG_MAIN.append(element);
		scrollToBottom();
	}

	clearInput(UI_ELEMENTS.INPUTS.MESSAGE);
}

function scrollToBottom() {
	document.querySelector('.wrapper').scrollTo({
		bottom: 0,
		top: document.querySelector('.wrapper').scrollHeight,
		behavior: 'smooth',
	});
}
function scrollToMSG(target) {
	document
		.querySelector('.wrapper')
		.scrollTo(
			0,
			target.getBoundingClientRect().y -
				document.querySelector('.wrapper').getBoundingClientRect().height -
				target.getBoundingClientRect().height
		);
}
function clearInput(input) {
	input.value = '';
}

export function showConfirmation() {
	const modal = document.querySelector('#dialog-confirmation');
	openModal(modal);
}

export function createMessageBlocks(messages, paginate = false, scrollTarget) {
	messages.forEach(message => {
		createMessageBlock(message, paginate);
	});
	if (paginate) {
		scrollToMSG(scrollTarget);
	} else {
		scrollToBottom();
	}
}
