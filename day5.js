console.log(Number("123"));    // 123
console.log(String(456));      // "456"
console.log(Boolean(0));       // false
console.log(Boolean("hi"));    // true


console.log(Number("abc")); 
console.log(1 + "2"); //12
console.log("3" * "4"); //12
console.log(true + 1); //2
console.log("5" + null); //5hull

let i=0
while (i<3) {
    alert(`number ${i}!`);
    i++;
}


let num;
do {
    num=promt ("Введите число больше 100?", 0);
} while (num <= 100 && num);


// ===ЗАДАЧИ НА ЦИКЛЫ===


console.log("Задача 1:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


console.log("Задача 2:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


console.log("Задача 3:");
let sum = 0;
for (let i = 1; i < 101; i++) {
    sum += i;
}
console.log(sum);


console.log("Задача 4:");
for (let i = 1; i < 11; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}


console.log("Задача 5:");
for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.log("Поехали!");


console.log("Задача 6:");
for (let i = 3; i <= 30; i += 3) {
    console.log(i);
}