function showVerticalMessage(str) {
	let result = '';
	if (str[0] === 'м') {
		str = str[0].toUpperCase() + str.substr(1);
	}
	if (str.length >= 10) {
		str = str.substr(0, 10);
	}
	for (let char of str) {
		result += `${char} \n`;
	}
	console.log(result);
}
showVerticalMessage('марафон');
