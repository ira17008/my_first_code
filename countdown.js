function isValidSeconds(seconds){
    return typeof seconds === "number" && !Number.isNaN(seconds) && seconds > 0;
}

function countdown (seconds){
    if (!isValidSeconds(seconds)){
        return "Ошибка: Недопустимое значение";
    } 
    for (seconds; seconds>0; seconds--){
        console.log(seconds);
    }
    return "Время вышло!"; 
}

console.log(countdown(8));
