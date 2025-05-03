let arr = [1,2,3,4,20,10]

function filterten(n){
    if (n%10==0){
        return true
    }
    return false
}

console.log(arr.filter(filterten));
