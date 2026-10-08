let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");

alert( a + b );

//===ОКРУГЛЕНИЕ===
console.log(Math.floor(3.7));
console.log(Math.ceil(3.2));
console.log(Math.round(3.5));
console.log(Math.round(3.4));
console.log(Math.trunc(3.9));


//===RANDOM===
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10));

//===MAX/MIN===
console.log(Math.max(1, 5, 3));
console.log(Math.min(1, 5, 3));

//===ПАРСИНГ===
console.log(parseInt("12px"));
console.log(parseFloat("3.14px"));
console.log(+'42');

//===toFixed===
let price = 12.345;
console.log(price.toFixed(2));

//===ЗАДАЧИ НА ЧИСЛА===
console.log("Задание 1: ")
let min = 2;
let max = 5;
let diapazon = Math.random()*(max - min +1)+min;
console.log(Math.floor(diapazon));

console.log("Задание 2: ")
let prices = [23.345, 99.999, 0.5, 1.005];
let rounded = prices.map(pricee => pricee.toFixed(2));
console.log(rounded);

console.log("Задание 3: ")
let numbers = [3, 7, 1, 9, 4, 2];
console.log(Math.max(...numbers)); 

console.log("Задание 4: ")
console.log(Math.sqrt(16));
console.log(Math.pow(2, 10));
console.log (Math.abs(-42));