let menu = document.getElementById("menu")
let closed = document.getElementById("close")
// //-------------------way 1-----------------------------------


// menu.addEventListener("click" , ()=>{
//     gsap.to("#full" , {
//         right: 0,
//     })
// })

// closed.addEventListener("click" , ()=>{
//     gsap.to("#full" , {
//         right: "-40%",
//     })
// })

//-------------------way 2-----------------------------------
var tl = gsap.timeline()

tl.to("#full", {
    right: 0,
})

tl.from("#full h4", {
    autoAlpha: "0",  
    stagger: 0.1,
    y: 20,
    duration: 0.7,
    delay:0,
})

tl.from("#full i", {
    opacity: 0,
    // duration:0.4,
})

tl.pause()

menu.addEventListener("click", () => {
    tl.play()
    
})

closed.addEventListener("click", () => {
    tl.reverse()
})