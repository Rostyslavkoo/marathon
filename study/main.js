let salaries = {
	Іван: 100,
	Петро: 300,
	Марія: 250,
};

function topSalary(salaries) {
	let maxSalary = 0;
	let maxName = null;

	for (let [name, price] of Object.entries(salaries)) {
		if (maxSalary < price) {
			maxSalary = price;
			maxName = name;
		}
	}
    return maxName;
}

console.log(topSalary(salaries));
