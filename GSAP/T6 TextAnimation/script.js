let e = document.getElementById("h")
let text = e.innerHTML.split("")
let cur = ""
let num = text.length / 2
text.forEach((ele,ind)=>{
    if (ind<num){
        cur  = cur + `<span class="a">${ele}</span>`
    }else{
        cur  = cur + `<span class="b">${ele}</span>`
    }
})

e.innerHTML = cur

gsap.from(".a",{
    y:55,
    opacity:0,
    // duration:5,
    stagger:0.1,
})
gsap.from(".b",{
    y:55,
    opacity:0,
    // duration:0.5,
    stagger:-0.1,
})

// let tl = gsap.timeline()

// tl.from(".a",{
//     y:55,
//     opacity:0,
//     // duration:5,
//     stagger:0.1,
// })
// tl.from(".b",{
//     y:55,
//     opacity:0,
//     // duration:0.5,
//     stagger:-0.2,
// })