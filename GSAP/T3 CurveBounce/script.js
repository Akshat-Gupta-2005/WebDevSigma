let path = `M 10 100 Q 250 100 490 100`
let fpath = `M 10 100 Q 250 100 490 100`

let e = document.querySelector("#space svg")

e.addEventListener("mousemove" , (det)=>{
    // console.log(det.x);
    path = `M 10 100 Q ${det.x} ${det.y} 490 100`
    gsap.to("svg path" , {
        attr: {d:path},
        delay:0,
        duration:0.1,
        ease:"power3.out"
    })
    
})

e.addEventListener("mouseleave" , (det)=>{
    gsap.to("svg path" , {
        attr: {d:fpath},
        delay:0,
        duration:1.5,
        ease:"elastic.out(1,0.2)" //---------------important-----------can use bounce
    })
    
})