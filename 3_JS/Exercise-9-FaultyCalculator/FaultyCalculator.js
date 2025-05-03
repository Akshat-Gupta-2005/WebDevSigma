let a = 10;
let b = 4;

let c = Math.random();

if (c < 0.1){
    console.log("a+b : " + (a-b) );
    console.log("a*b : " + (a+b) );
    console.log("a-b : " + (a/b) );
    console.log("a/b : " + (a**b) );
}else{
    console.log("a+b : " + (a+b) );
    console.log("a-b : " + (a-b) );
    console.log("a*b : " + (a*b) );
    console.log("a/b : " + (a/b) );
}