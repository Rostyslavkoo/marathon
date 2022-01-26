let n = 10;
let i = 1;

for (let i = 2; i <= n; i++) {
	for (let j = 2; j <= i; j++) {
		console.log(['i', i, 'j', j]);
		console.log(i % j);
	}
}
