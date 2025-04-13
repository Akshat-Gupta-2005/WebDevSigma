let  n = prompt("Enter number of inputs")
let arr = [1,2,3,4]

for (let i = 0 ; i < n ; i++){
    let inp = prompt("Enter number")
    arr.push(Number(inp))
}

console.log(arr);
