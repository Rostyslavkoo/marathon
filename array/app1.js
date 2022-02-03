// let arr = [2, 1, 15];

// arr.sort((a, b) => a - b);
// console.log(arr);

// let names = 'Вася, Петя, Маша';

// let arr = names.split(' ');
// console.log(arr)

// let arr = ['Вася', 'Петя', 'Маша'];

// let str = arr.join(', '); // объединить массив в строку через ;

// alert( str ); // Вася;Петя;Маша

// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduceRight((sum, current) => sum + current,0);

// console.log(result);

// let army = {
//     minAge: 18,
//     maxAge: 27,
//     canJoin(user) {
//       return user.age >= this.minAge && user.age < this.maxAge;
//     }
//   };

//   let users = [
//     {age: 16},
//     {age: 20},
//     {age: 23},
//     {age: 30}
//   ];

//   let soldiers = users.filter(e => army.canJoin(e));

//   console.log(soldiers)

// function camelize(str) {
// 	return str
// 		.split('-')
// 		.map((word, index) =>
// 			index === 0 ? word : word[0].toUpperCase(0) + word.slice(1)
// 		)
// 		.join('');
// }

// console.log(camelize('list-style-image'));

function filterRange(arr, a, b) {
	let result = [];
	for (let i = a; i <= b; i++) {
            if(arr.includes(i)){
                result.push(i)
            }

    }
    
    return arr.filter(item => (a <= item && item <= b))
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered);
console.log(arr);
