function makeCounter() {
    let count = 0
	return function () {
        console.log(count)
		return count++; // есть доступ к внешней переменной "count"
	};
}

let counter = makeCounter();
counter();
counter();
counter();
counter();
