// let user = {
//     name : "Josh",
//     age : 30
// };

// user.sayHi = function() {
//     console.log("Hi!");
// };

// user.sayHi();

// let user = {
//     name : "Josh",
//     age : 30,
//     sayHi(){
//         console.log(this.name);
//     }
// };

// user.sayHi();


//===ЗАДАЧИ ПОСЛЕ ГЛАВЫ===

let calculator = {
    read (){
        this.a=2;
        this.b=5;
        // this.a= prompt ("Введите значение 1: ", 0)
        // this.b= prompt ("Введите значение 2: ", 0)
    },
    sum () {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
console.log (calculator.sum());
console.log (calculator.mul());



let original = { 
    name: "Ира", 
    address: { city: "Екатеринбург" } 
};

let copy = {...original};
copy.address.city = "Москва";

console.log("original:", original.address.city);   // ???
console.log("copy:", copy.address.city);           // ???


let deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.address.city = "Санкт-Петербург";

console.log("original:", original.address.city);   // ???
console.log("deepCopy:", deepCopy.address.city);   // ???


//===ЗАДАЧИ ПО ПРОЙДЕННОЙ ТЕМЕ===

console.log("Задание 1: ")
let myCalc = {
    value : 0,
    add (n) {
        this.value += n
        return this.value ;
    },
    subtract(n) {
        this.value -= n
        return this.value ;
    },
    multiply(n){
        this.value *= n
        return this.value ;
    },
    getValue(){
        return this.value
    }
}

myCalc.add(10);
myCalc.subtract(3);
myCalc.multiply(2);
console.log(myCalc.getValue());


console.log("Задание 2: ")
let ladder = {
    step : 0,
    up(){
        ++this.step;
        return this;
    },
    down() {
        --this.step;
        return this;
    },
    showStep(){
        console.log(this.step);
    }
}

ladder.up().up().down().showStep();