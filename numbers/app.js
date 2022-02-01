const random = (a, b) => {
	let result = a + Math.random() * b + 1 - a;
	console.log(Math.floor(result));
};

random(1, 5);
