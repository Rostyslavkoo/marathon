// function truncate(str, limit) {
// 	if (str.length >= limit) {
// 		return str.substr(0, limit - 1) + '…';
// 	}
// }

// console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));

// function extractCurrencyValue(str){
//     return  +str.slice(1);
// }
// console.log( extractCurrencyValue('$120'));

// let number = 14.123122;

// const digits = number.toString().includes('.')
// 	? number.toString().split('.').pop().length
// 	: 0;

// console.log(navigator.platform);

for (let node of document.body.childNodes) {
	console.log(node)
  }