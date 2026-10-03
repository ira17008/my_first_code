//===СТРЕЛОЧНЫЕ ФУНКЦИИ===

// let sum = (a, b) => a+b;
// console.log(sum(2, 4));

// let del = a => a/4;
// console.log(del(20));

// let hi = () => console.log("Приветик");
// hi();

// age = 17
// let welcom = (age < 18) ?
//     () => "Привет" :
//     () => "Здравствуйте";
// console.log(welcom(12));

//===ЗАДАЧА ПОСЛЕ ГЛАВЫ===

let ask = "Вы уже согласны?"  ?
    () => alert("Вы согласны") :
    () => alert("Вы отменили выполнение");


//===FUNCTION EXPRESSION===
let greet = function (name){
    return "Привет, " + name;
};
console.log(greet("Ира"));

//===СТРЕЛОЧНАЯ===
let greetArrow = (name1) => {
    return "Привет, " + name1;
};
console.log(greetArrow("котик"))


//===СТРЕЛОЧНАЯ КАРОТКАЯ===
let greetShort = (name2) => "Привет, " + name2;
console.log(greetShort("Ярик"));

//===ТРОЙНОЕ СРАВНЕНИЕ===
function sum1(a, b) {return a + b}
let sum2 = (a, b) => {return a + b; };
let sum3 = (a, b) => a + b;
console.log(sum1(1, 2), sum2(1, 2), sum3(1, 2)); 


//===ЗАДАЧИ===

console.log("Задание 1: ")
function double1 (n) {
    return n * 2;
}

let double2 = function(n){
    return n * 2;
};

let double3 = n => n * 2;

console.log(double1(5));   
console.log(double2(5));  
console.log(double3(5)); 


console.log("Задание 2: ")
let isEven = n => n % 2 === 0;
console.log(isEven(4));
console.log(isEven(7));


console.log("Задание 3: ")
let min = (a, b) => a<b ? a : b;
console.log(min(5, 3));    
console.log(min(10, 20));  
console.log(min(7, 7));


console.log("Задание 4: ")
let countVowels = str => {
    let count=0;
    for (let i of str){
        if (i === "а" ||
            i === "е" ||
            i === "ё" ||
            i === "и" ||
            i === "о" ||
            i === "у" ||
            i === "ы" ||
            i === "э" ||
            i === "ю" ||
            i === "я" 
        ){
            count++;
        }
    };
    return count;
};
console.log(countVowels("привет"));        
console.log(countVowels("молоко"));        
console.log(countVowels("JavaScript"));   
console.log(countVowels(""));