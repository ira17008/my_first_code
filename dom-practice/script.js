let title = document.querySelector("#title");
let texts = document.querySelectorAll(".text");


console.log(title);
console.log(texts.length);

console.log(title.textContent);
console.log(title.innerHTML);

title.textContent = "Новый заголовок!";
title.style.color = "blue";
title.style.fontSize = "32px";

title.classList.add("active");
title.classList.remove("active");


//===МОЯ ПРАКТИКА===
let firstTitle = document.querySelector("#title");
firstTitle.textContent = "Я изучаю DOM";

let btn = document.querySelector("#btn");
btn.style.color = "red";
btn.style.fontSize = "20px";

let text = document.querySelectorAll(".text");
text.forEach(elem => console.log(elem.textContent));



let newP = document.createElement("p");
newP.textContent = "Я создан через JS";
document.body.append(newP);

//день 2. обработчики событий

let clickBtn = document.querySelector("#clickBtn");
clickBtn.addEventListener("click", function(){
    console.log("Кнопка нажата");
});

let nameInput = document.querySelector("#nameInput");
let output = document.querySelector("#output");
nameInput.addEventListener("input", function(event){
    output.textContent = "Привет, " + event.target.value;
});

console.log("Скрипт загружен");

//задачи
let count = document.querySelector("#count");
let sum = 0;
function countClick(){
    sum +=1 ;
    count.textContent = sum;
}
let counterBtn = document.querySelector("#counterBtn");
counterBtn.addEventListener("click", countClick);

let box = document.querySelector("#box");
let colorBtn = document.querySelector("#colorBtn");
function colorBt (){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    box.style.background = `rgb(${r}, ${g}, ${b})`;
}
colorBtn.addEventListener("click", colorBt);

let secret = document.querySelector("#secret");
let toggleBtn = document.querySelector("#toggleBtn");
function toggleBt(){
    secret.hidden = !secret.hidden;
}
toggleBtn.addEventListener("click", toggleBt);


//день три. Формы

let form = document.querySelector("#myForm");
let input = document.querySelector("#taskInput");
let list = document.querySelector("#taskList");

let counter = document.querySelector("#counter");
let coun = 0;

form.addEventListener("submit", function(events){
    events.preventDefault();
    let text = input.value;
    if (text === "") return;

    let li = document.createElement("li");
    li.textContent = text;

    let btn = document.createElement("button");
    btn.textContent = "Удалить";

    coun++;
    counter.textContent = "Задач : " + coun;

    btn.addEventListener("click", function(){
        li.remove();
        coun--;
        counter.textContent = "Задач : " + coun;
    });

    li.append(btn);

    list.append(li);
    input.value = "";

});