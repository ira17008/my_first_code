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