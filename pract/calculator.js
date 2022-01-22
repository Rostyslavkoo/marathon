function calcNumber(event, number1, number2) {
	switch (event) {
		case 'sum':
			return number1 + number2;
			break;
		case 'div':
			return number2 === 0 ? 'Error!! division by 0' : number1 / number2;
			break;
		case 'multi':
			return number1 * number2;
			break;
		case 'sub':
			return number1 - number2;
			break;
		default:
			return 'not valid event';
	}
}

function checkValidParams(number1, number2) {
	const isValidNumber = isNaN(number1) || isNaN(number2) || !number1 || !number2;
	return isValidNumber ? false : true;
}

function showCalcedValue(event, number1, number2) {
	alert(calcNumber(event, number1, number2));
}
function getCalcValue() {
	let number1 = Number(prompt('number1', ''));
	let number2 = Number(prompt('number2', ''));
	let event = prompt('event', '');
	const isValidParams = checkValidParams(number1, number2);
	if (!isValidParams) {
		alert('Error');
		return;
	}
	showCalcedValue(event, number1, number2);
}

getCalcValue();
