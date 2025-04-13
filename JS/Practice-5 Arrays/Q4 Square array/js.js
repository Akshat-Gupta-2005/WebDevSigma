let arr = [1,2,3,4,20,10]
let sqa = []
function filterten(n){
    sqa.push(n*n)
}
arr.filter(filterten)
console.log(sqa);
