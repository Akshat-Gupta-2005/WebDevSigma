let a,b,c;

let r1 = Math.random();
let r2 = Math.random();
let r3 = Math.random();
console.log(r1);
console.log(r2);
console.log(r3);


if (r1 >= 0.66){
    a = "Crazy"
}else if (r1 >= 0.33){
    a = "Amazing"
}else if (r1 >= 0){
    a = "Fire"
}

if (r2 >= 0.66){
    b = "Engine"
}else if (r2 >= 0.33){
    b = "Foods"
}else if (r2 >= 0){
    b = "Garments"
}

if (r3 >= 0.66){
    c = "Bros"
}else if (r3 >= 0.33){
    c = "Limited"
}else if (r3 >= 0){
    c = "Hub"
}

console.log(`Name: ${a}${b}${c}`);