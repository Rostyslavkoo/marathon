function calcNumber(event, number1, number2) {
	const CALCED_OPERATION = {
		sum: {
			role: 'sum',
			priority: 1,
			action: number1 + number2,
		},
		div: {
			role: 'div',
			priority: 2,
			action: number1 / number2,
		},
		multi: {
			role: 'multi',
			priority: 2,
			action: number1 * number2,
		},
		sub: {
			role: 'sub',
			priority: 1,
			action: number1 - number2,
		},
	};
	if (event === 'div' && number2 == 0) {
		return 'division by 0';
	}
	if (event in CALCED_OPERATION) {
		return CALCED_OPERATION[event].action;
	}
	return 'unknown operation';
}

// getCalcValue();
const OPERATIONS = {
	sum: {
		role: '+',
		action: 'sum',
	},
	div: {
		role: '/',
		action: 'div',
	},
	multi: {
		role: '*',
		action: 'multi',
	},
	sub: {
		role: '-',
		action: 'sub',
	},
};

let calcHeader = document.querySelector('.calc__header');
let calcHeaderValue = calcHeader.innerHTML;

let currentOperator = '';
let currentClick = null;
let previousClick = null;
let actions = [];

function onClickNumBtn(value) {
	// start click 0
	if (previousClick === null && value === 0) {
		return;
	}
	currentClick = value;
	// when previous was opertaion and current is value
	if (previousClick in OPERATIONS || previousClick === null) {
		actions.push(currentClick);
	} else {
		// when previous was value and current is value
		actions.push(+(String(actions.pop()) + String(value)));
	}
	calcHeader.innerHTML += currentClick;
	previousClick = currentClick;
	splitNull();
}

function onClickOperation(operation) {
	if (operation in OPERATIONS) {
		currentClick = operation;

		if (previousClick === currentClick) {
			return;
		}
		// click operation when previous was operation
		if (currentClick in OPERATIONS && previousClick in OPERATIONS) {
			actions.pop();
			actions.push(OPERATIONS[operation].role);
			calcHeader.innerHTML = actions.join('');
			return;
		}

		actions.push(OPERATIONS[operation].action);
		calcHeader.innerHTML += OPERATIONS[currentClick].role;
		previousClick = operation;
	}
	splitNull();
}

function onCalculate() {
	let result = '';
	// when last was opertion
	if (actions[actions.length - 1] in OPERATIONS && actions.length > 1) {
		actions.pop();
	}
	// when only one item in arr
	if (actions.length === 1) {
		calcHeader.innerHTML = actions[0] in OPERATIONS ? 0 : actions;
		return;
	}
	let getOperations = actions.filter(e => typeof e === 'string');
	let actionsCopy = [...actions];
	let operationsBlocks = [];
	// break an array into blocks of operations
	getOperations.forEach(item => {
		let index = actionsCopy.indexOf(item);
		operationsBlocks.push(
			actionsCopy.splice(index - index === 0 ? 0 : 1, index + 2)
		);
	});
	// calculate each operartions

	operationsBlocks.forEach((item, index) => {
		if (index > 0) {
			item.unshift(result);
		}
		result = calcNumber(item[1], item[0], item[2]);
	});
	// show result
	if (result) {
		calcHeader.innerHTML = result;
	}
	splitNull();
}

function onClicClear() {
	actions = []
	previousClick = null
	currentClick = null
	calcHeader.innerHTML = '0'
}
function onUnion() {}

function splitNull() {
	let arr = calcHeader.innerHTML;
	if (arr.startsWith(0)) {
		arr = arr.slice(1);
		calcHeader.innerHTML = calcHeaderValue = arr;
	}
}
