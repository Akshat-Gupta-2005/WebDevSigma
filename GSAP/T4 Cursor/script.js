let body = document.querySelector("body")
let cursor = document.getElementById("cursor")

body.addEventListener("mousemove" , (dets)=>{
    gsap.to("#cursor" , {
        x:dets.x - 10,
        y:dets.y - 10,
        duration:0.3,
        easy: "back.out"
    })
})