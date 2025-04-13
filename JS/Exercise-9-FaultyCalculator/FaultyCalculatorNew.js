let a = prompt("Enter first number");
let b = prompt("Enter symbol number");
let c = prompt("Enter second number");

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

let r = Math.random();

if (r>0.1){
    console.log(eval(`${a} ${b} ${c}`));
}else{
    c = obj[c];
    console.log(eval(`${a} ${b} ${c}`));
}