const multiplyNumeric = menu => {
	for (key in menu) {
		if (typeof menu[key] === 'number') {
			menu[key] *= 2;
		}
	}
};

let menu = {
	width: 200,
	height: 300,
	title: 'My menu',
};

multiplyNumeric(menu);

console.log(menu);
