function calculator(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                return "Ошибка: Нельзя поделить на 0";
            } else {
                return a / b;
            }
        default:
            return "Ошибка: Такого оператора не существует";
    }
}


console.log(calculator(2, 5, "/"));
console.log(calculator(2, 5, "+"));   
console.log(calculator(2, 5, "-"));   
console.log(calculator(2, 5, "*"));   
console.log(calculator(10, 2, "/"));  
console.log(calculator(5, 0, "/"));  
console.log(calculator(5, 2, "abc")); 