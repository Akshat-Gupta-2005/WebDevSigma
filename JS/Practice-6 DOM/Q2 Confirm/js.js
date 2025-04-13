let n = prompt("Enter age")
if (n>=18){
    alert("You can drive")
}else{
    alert("You cannot drive")
}
let con = confirm("Do you want to see the prompt again?")
if (con==1){
    if (n>=18){
        alert("You can drive")
    }else{
        alert("You cannot drive")
    }
}

