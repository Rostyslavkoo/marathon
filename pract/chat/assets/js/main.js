import { UI_ELEMENTS } from './constants.js';
import { createMessageBlock } from './view.js';

UI_ELEMENTS.BUTTONS.SENT_MESSAGE.addEventListener('click', event => {
	createMessageBlock();
});

UI_ELEMENTS.INPUTS.MESSAGE.addEventListener('keypress', event => {
	if (event.keyCode === 13) {
		createMessageBlock();
	}
});
