const STRING_LIMIT = 10;
const TARGET_CHAR = 'м';

function showVerticalMessage(str) {
	let result = '';
	if (str[0] === TARGET_CHAR) {
		str = str[0].toUpperCase() + str.substr(1);
	}
	if (str.length >= STRING_LIMIT) {
		str = str.substr(0, STRING_LIMIT);
	}
	for (let char of str) {
		result += `${char} \n`;
	}
	
	console.log(result);
}
showVerticalMessage('марафон');
