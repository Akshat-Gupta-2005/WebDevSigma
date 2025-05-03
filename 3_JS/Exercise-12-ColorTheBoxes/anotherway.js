let e = document.body.getElementsByClassName("box")

for (const element of e) {
    let x1 = Math.floor(Math.random()*255) ;
    let x2 = Math.floor(Math.random()*255) ;
    let x3 = Math.floor(Math.random()*255) ;

    element.style.backgroundColor = `rgb(${x1},${x2},${x3})`;
}