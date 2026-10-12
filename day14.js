// === ОБЪЕКТ → СТРОКА ===
let user = {
    name : "Ира",
    age : 17,
    citi : "Екаьеринбург"
};

let json = JSON.stringify(user);
console.log(json);

// === СТРОКА → ОБЪЕКТ ===
let parsed = JSON.parse(json);
console.log(parsed.name);

// === ЧТО ТЕРЯЕТСЯ ===
let tricky = {
    name : "Ира",
    greet : function(){return "Hi";},
    age : undefined,
    date : new Date()
};
console.log (JSON.stringify(tricky));


//===ЗАДАЧА===
console.log("Задание 1: ");
let jsonStr = '{"name":"Ира","skills":["JS","React"],"age":18}';
let pars = JSON.parse(jsonStr);
console.log(pars.name);
console.log(pars.skills[1]);
console.log(pars.age);
pars.name = "Ирина";
let str = JSON.stringify(pars);
console.log(str);

 