// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": true,
// };

// console.log(user.age);
// console.log(user.name);

// user.isAdmin = true; //добавили свойство

// console.log(user.isAdmin);

// delete user.age;  //удалить свойство

// console.log(user.age);  //выводит undefined

// for (let key in user){
//     console.log(key);
//     console.log(user[key]);
// }

//===ЗАДАЧИ ПОСЛЕ ГЛАВЫ===

console.log("Задача после главы. №1");
let user = {};
user.name = "John";
console.log(user);
user.surname = "Smith";
console.log(user);
user.name = "Pete";
console.log(user);
delete user.name;
console.log(user);


console.log("Задача после главы. №2");
let schedulec = {};
function isEmpty (obj) {
    for (let key in obj){
        return false;
    } 
    return true;
}
console.log(isEmpty(schedulec));


console.log("Задача после главы. №3");
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum=0;
for (let key in salaries){
    sum+=salaries[key];
}
console.log(sum);



console.log("Задача после главы. №4");
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
console.log(menu);
function multiplyNumeric(obj){
    for (let key in obj){
        if (typeof obj[key] === "number") {
            obj[key]*=2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu);