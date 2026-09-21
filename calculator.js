function isValidOperator(operator){
    return operator === "+" ||
           operator === "-" ||
           operator === "*" ||
           operator === "/" ||
           operator === "%" ||
           operator === "**";
}

console.log(isValidOperator("+"));    
console.log(isValidOperator("abc"));  


function calculator(a, b, operator) {
    if (!isValidOperator(operator)){
        return "Ошибка: Такого оператора не существует";
    }
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "**":
            return a ** b;
        case "%":
            return a % b;
        case "/":
            if (b === 0) {
                return "Ошибка: Нельзя поделить на 0";
            } else {
                return a / b;
            }
        default:
            return "Ошибка: Неизвестная ошибка";
    }
}


console.log(calculator(2, 5, "/"));
console.log(calculator(2, 5, "+"));   
console.log(calculator(2, 5, "-"));   
console.log(calculator(2, 5, "*"));   
console.log(calculator(10, 2, "/"));  
console.log(calculator(5, 0, "/"));  
console.log(calculator(5, 2, "abc")); 
console.log(calculator(2, 3, "**"));
console.log(calculator(10, 3, "%")); 

