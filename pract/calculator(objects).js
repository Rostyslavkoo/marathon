
function calcNumber(event, number1, number2) {
    const operations = {
        sum: number1 + number2,
        div: number1 / number2,
        multi: number1 * number2,
        sub: number1 - number2,
    }
    if(event === 'div' && number2 == 0){
        return 'Error!! division by 0'
    }

    for (operation in operations){
            return operations[event]

    }
  
        

}

function checkValidParams(number1, number2) {
	const isValidNumber =
		isNaN(number1) || isNaN(number2)
	return isValidNumber ? false : true;
}

function showCalcedValue(event, number1, number2) {
	alert(calcNumber(event, number1, number2));
}
function getCalcValue() {
	let number1 = 1
	let number2 = 5
	let event = 'sum'
	const isValidParams = checkValidParams(number1, number2);
	if (!isValidParams) {
		alert('Error');
		return;
	}
	showCalcedValue(event, number1, number2);
}

getCalcValue();
