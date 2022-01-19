const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('Enter a number -> ', answer => {
	if (Number(answer) || Number(answer) === 0) {
		if (answer > 0 && answer != 0) {
			console.log('1');
		} else if (answer < 0 && answer != 0) {
			console.log('-1');
		} else {
			console.log('0');
		}
	} else {
		console.log('not a number');
	}
	rl.close();
});
