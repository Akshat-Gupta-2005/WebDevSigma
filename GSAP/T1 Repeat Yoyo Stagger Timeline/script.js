gsap.to("#box1", {
    x: 1000,
    duration: 1,
    delay: 1,
    rotate: 360,
    backgroundColor: "green",
    borderRadius: "50%",
    scale: "0.5",
    
    repeat: -1,
    yoyo: true,
})


gsap.from("#box2", {
    x: 500,
    y: 500,
    duration: 2,
    delay: 1,
    opacity: 0
})

// gsap.to("#box2", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
// })

gsap.from("h1", {
    opacity: 0,
    duration: 1,
    y: 30,
    delay: 1,
    stagger: 1
})

var tl = gsap.timeline()

tl.to("#box3" , {
    x:1000,
    duration:2,
    repeat:-1,
    yoyo:true
})
tl.to("#box4" , {
    x:1000,
    duration:2
})