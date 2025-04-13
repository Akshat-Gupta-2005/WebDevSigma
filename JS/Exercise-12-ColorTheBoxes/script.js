let e = document.body.getElementsByClassName("box")

let col = {
    0 : "red",
    1 : "blue",
    2 : "green",
    3 : "yellow"
}

for (const element of e) {
    let x = Math.floor(Math.random()*10) % 4;
    element.style.backgroundColor = col[x];
}