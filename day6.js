

//===РЕШЕНИЕ ЗАДАЧ===

console.log("Задание 1: ")
let day = "среда";
switch (day) {
    case "суббота":
    case "воскресенье":
        console.log("Выходной");
        break;
    case "понедельник":
        console.log("Начало недели");
        break;
    case "пятница":
        console.log("Скоро выходные");
        break;
    default:
        console.log("Рабочий день");
        break;
}
console.log("")


console.log("Задание 2: ");
function greet(name){
    return "Привет, " + name + "!";
}
console.log(greet("Ира"));
console.log(greet("Мир"));
console.log("")


console.log("Задание 3: ");
function sum(a, b){
    return a + b;
}
console.log(sum(8, 17));
console.log(sum(100, 200));
console.log("")


console.log("Задание 4: ");
function isEvent(number){
    return number % 2 === 0;
}
console.log(isEvent(4));
console.log(isEvent(7));
console.log("")


console.log("Задание 4.2: ");
function isEvent2(num){
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEvent2(17));
console.log(isEvent2(8));
console.log("")


console.log("Задание 5: ");
function max(a, b){
    return a > b ? a : b;
}
console.log(max(17, 8));
console.log(max(2, 22));
console.log(max(3, 3));