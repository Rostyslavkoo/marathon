const title = document.querySelectorAll('li');
title.forEach(li => {
	const span = document.createElement('span')
    li.prepend(span)
    span.append(span.nextSibling)
});
tree.onclick = function (event) {
	if (event.target.tagName != 'SPAN') return;
	const childrenContainer = event.target.parentNode.querySelector('ul');
	childrenContainer.hidden = !childrenContainer.hidden;
};
