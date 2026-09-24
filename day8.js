let styles=["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length)/2)]="Классика";
console.log(styles.shift());
styles.unshift("Рэп", "Регги");
console.log(styles);

function isValidZnah(znah){
    return znah !== null && !Number.isNaN(Number(znah)) && znah.trim() !== "";
}

let arr=[];
function sumInput(){
    while(true){
        let znah=prompt("ввести значения: ", 0);
        if (!isValidZnah(znah)){
            break;
        }
        arr.push(Number(znah));
}
    let sum=0;
    for (let i=0; i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}


//===ЗАДАЧИ===

console.log("Задача 1: Сумма и разность всех чисел: ");

let numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
let average =sum / numbers.length;
console.log ("Сумма: ", sum);
console.log ("Среднее: ", average);


console.log("Задача 2: Максимум и минимум в массиве: ");
let values = [3, 8, 1, 15, 4, 7];
let min = values[0];
let max = values[0];
for (let i=0; i<values.length; i++){
    if (values[i] > max){
        max = values[i];
    }
    if (values[i] < min){
        min = values[i];
    }
}
console.log("Минимальное: ", min);
console.log("Максимальное: ", max);


console.log("Задача 3: Обратный массив: ");
function reverse(arr){
    let new_arr=[];
    for (let i=arr.length-1; i>=0; i--){
        new_arr.push(arr[i]);
    }
    return new_arr;
}
console.log(reverse([1, 2, 3, 4, 5, 6]));
