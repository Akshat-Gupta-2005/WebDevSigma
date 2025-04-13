gsap.from("#page1 #box",{
    scale:0,
    duration:2,
    delay:1,
    rotate:360,
    
})
gsap.from("#page2 #box",{
    scale:0,
    duration:2,
    delay:1,
    rotate:360,
    // scrollTrigger:"#page2 #box2"
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start: "top 60%",
        end: "top 40%",
        scrub:3, //true or between 2 to 5
        pin:true,
    }

})
// gsap.from("#page3 #box",{
//     scale:0,
//     duration:2,
//     delay:1,
//     rotate:360,

// })