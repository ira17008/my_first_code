//метод splice
let arr = ["Я", "изучаю", "JavaScript"];
arr.splice(1, 1);
console.log(arr);

let arr1 = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
arr1.splice(0, 3, "Давай", "танцевать");
console.log(arr1);

let remove = arr1.splice(0, 2);
console.log(remove);

let arr2 = ["Я", "изучаю", "JavaScript"];
arr2.splice(2, 0, "сложный", "язык");
console.log(arr2);

//метод slice

let arr3 = ["t", "e", "s", "t"]
console.log(arr3.slice(1, 3));
console.log(arr3.slice(-2));

//метод concat
let arr4 = [1, 2];
console.log(arr4.concat([3, 4, 5], 6, 7));

//метод forEach: перебор
// ["Бильбо", "Гэндальф", "Назгул"].forEach(console.log)

["Бильбо", "Гэндальф", "Назгул"].forEach((item, index, array) => {
    console.log(`У ${item} индекс ${index} в ${array}`);
});

//методы поиска indexOf/lastIndexOf и includes
let arr5 = [1, 0, false, 1];
console.log(arr5.indexOf(0));
console.log(arr5.indexOf(false));
console.log(arr5.indexOf(null));
console.log(arr5.includes(1));
console.log(arr5.lastIndexOf(1));

//методы find и findIndex/findLastIndex
let user= [
    {id: 1, names: "Ярик"},
    {id: 2, names: "Ира"},
    {id: 3, names: "котики"},
];
let users = user.find(item => item.id == 1);
console.log(users.names);
console.log(user.findLastIndex(items => items.names == "котики"));

//метод filter
let users2 = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];
let someUsers = users2.filter(item => item.id < 3);
console.log(someUsers.length);

//метод map
let lengths = ["Бильбо", "Гэндальф", "Назгул"].map(item => item.length);
console.log(lengths); 

//метод sort
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr6 = [1, 2, 15];
arr6.sort(compareNumeric);
console.log(arr6);

let arr7 = [1, 2, 15, 20, 4];
arr7.sort( (a, b) => a - b );
console.log(arr7);

//метод reverse
let arr8 = [1, 2, 3, 4, 5];
arr8.reverse();

console.log( arr8 );

//методы reduce/reduceRight
let arr9 = [1, 2, 3, 4, 5];
let result = arr9.reduce((sum, current) => sum + current, 0);
console.log(result); // 15

//методы split и join
let nams = 'Вася, Петя, Маша';
let arr11 = nams.split(', ');
for (let nam of arr11) {
    console.log( `Сообщение получат: ${nam}.` ); // Сообщение получат: Вася (и другие имена)
}

let arr12 = ['Вася', 'Петя', 'Маша'];
let str = arr12.join(';'); // объединить массив в строку через ;
console.log( str );

//===ЗАДАЧИ ПОСЛЕ ГЛАВЫ===

console.log("Задание 1: ");
let camelize =function(str) {
    let startstr = str.split("-");
    let endstr= startstr.join('');
    return endstr;
};

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));

console.log("Задание 2: ");
function filterRange(arr, a, b) {
    let filterarr = arr.filter(item => (item >= a && item <= b));
    return filterarr;
};
let arr13 = [5, 3, 8, 1];
let filtered = filterRange(arr13, 1, 4);
console.log(filtered);
console.log(arr13);

console.log("Задание 3: ");
let arrnum3 = [5, 3, 8, 1];
function filterRangeInPlace (arr, a, b){
    for (let i = arr.length-1 ; i>=0 ;i-- ){
        if (arr[i] < a || arr[i] > b){
            arr.splice (i, 1);
        }
    }
}
filterRangeInPlace(arrnum3, 1, 4);
console.log(arrnum3);


console.log("Задание 4: ");
let arr14 = [5, 2, 1, -10, 8];
arr14.sort( (a, b) => b-a);
console.log(arr14);

console.log("Задание 5: ");
let arr15 = ["HTML", "JavaScript", "CSS"];
function copySorted(arr){
    let newarr = arr.concat();
    return newarr;
}
let sorted = copySorted(arr15);
console.log(sorted.sort());
console.log(arr15);

console.log("Задание 6: ");
//какой-то тяжелый калькулятор, пока пропускаю, потом вернусь

console.log("Задание 7: ");
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let userss = [ vasya, petya, masha ];
let names = userss.map(item => item.name);
console.log(names);

console.log("Задание 8: ");
let vasya3 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya3 = { name: "Петя", surname: "Иванов", id: 2 };
let masha3 = { name: "Маша", surname: "Петрова", id: 3 };
let users3 = [ vasya3, petya3, masha3 ];
let usersMapped = users3.map (person => {
    return {
        id : person.id,
        fullName : `${person.name} ${person.surname}`,
    }
});
console.log( usersMapped[0].id );
console.log( usersMapped[0].fullName );


console.log("Задание 9: ");
let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 28 };
let arr16 = [ vasya2, petya2, masha2 ];
function sortByAge (arr){
    return arr.sort( (a, b) => a.age - b.age);
}
sortByAge(arr16);
console.log(arr16[0].name); 
console.log(arr16[1].name); 
console.log(arr16[2].name); 

