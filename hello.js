console.log("Я начала.");
let messedg="Helloy";
console.log(`top, ${messedg}`);



//switch

let browser=prompt("hgvgkhv", '');
if (browser==="Edge"){
    alert("You've got the Edge!");
} else if (browser==='Chrome' ||
    browser==='Firefox' ||
    browser==='Safari' || 
    browser==='Opera' ){
    alert("Okay we support these browsers too");
} else{
    alert( 'We hope that this page looks ok!' );
}


const number=+prompt("jfngdnfg", '');
switch(number){
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}


//функции 
function checkAge(age) {
  return age > 18 ? true: confirm('Родители разрешили?');
}

function checkAge(age) {
  return (age>18) || confirm('Родители разрешили?');
}


function min(a, b){
    if (a<b){
        return a;
    } else{
        return b;
    }
}

function min2(a, b){
    return a<b ? a : b;
}
