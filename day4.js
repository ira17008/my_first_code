//1 задача. 
let agem = 13;
if (agem >= 18){
    console.log('Совершеннолетняя');
}else {
    console.log ("Ещё рано");
}

//2 задача.
let age = 17; 
let hasParent =true;
if (age >= 18 || hasParent){
    console.log("Проходите");
}else {
    console.log("Вам нельзя");
}

//3 задача.

let login="admin";
let password="1234";
let isBlocked=false;
if (login==="admin" && password==="1234" && ! isBlocked){
    console.log("Добро пожаловать!");
}else {
    console.log("Отказано");
}

//4 задача.

let total=1708;
let isRegular= true;
if (total>5000 || isRegular){
    console.log("Скидка есть");
}else {
    console.log("Скидки нет");
}

//5 задача.

let day="понедельник";
let isHoliday=true;
let isVacation=true;
if (day==="суббота" || day==="воскресенье" || isHoliday|| isVacation){
    console.log("Выходной");
} else {
    console.log("Работаем");
}
