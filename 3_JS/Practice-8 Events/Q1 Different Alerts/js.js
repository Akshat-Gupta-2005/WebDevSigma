let b1 = document.getElementById("first")
let b2 = document.getElementById("second")
let b3 = document.getElementById("third")

b1.onclick = ()=>{
    alert("first")
}

// b1.addEventListener("click",()=>{alert("first alert")})
b2.addEventListener("click", () => { alert("second alert") })
b3.addEventListener("click", () => { alert("third alert") })