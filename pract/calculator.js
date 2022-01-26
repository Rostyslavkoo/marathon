function calcNumber(event, number1, number2) {
	switch (event) {
		case 'sum':
			return number1 + number2;
		case 'div':
			if (number2 === 0) {
				return 'Error!! division by 0';
			} else {
				return number1 / number2;
			}
		case 'multi':
			return number1 * number2;
		case 'sub':
			return number1 - number2;
		default:
			return 'not valid event';
	}
}

function checkValidParams(number1, number2) {
	const isValidNumber =
		isNaN(number1) || isNaN(number2) || !number1 || !number2;
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
