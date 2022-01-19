// let a = 2;
// let b = 2;

// const result = a + b < 4 ? 'Мало' : 'Багато';
// console.log(result);

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function EnterLogin() {
	rl.question('Enter a Login -> ', answer => {
		answer != ``
			? answer === 'manager'
				? console.log('hello manager')
				: answer === 'owner'
				? console.log('hello owner')
				: answer === 'admin'
				? console.log('hello admin')
				: console.log('bye :(')
			: EnterLogin();
	});
}

EnterLogin();
