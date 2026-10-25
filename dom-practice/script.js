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