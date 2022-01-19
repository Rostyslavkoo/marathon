const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let counter = 0;

rl.question('What is an official name of JavaScript? (1/5)-> ', answer => {
	if (answer.trim() == 'ECMAScript') {
		console.log('correctly!!!');
		rl.close();
	} else {
		counter++;
		tryAgain();
	}
});

function tryAgain() {
	counter++;
	if (counter <= 5) {
		rl.question(`Try again (${counter}/5)-> `, answer => {
			if (answer.trim() == 'exit') {
				rl.close();
			} else {
				if (answer.trim() == 'ECMAScript') {
					console.log('correctly!!!');
				} else {
					tryAgain();
				}
			}
		});
	} else {
		console.log('Sorry, but your attempts are over');
		rl.close();
	}
}
