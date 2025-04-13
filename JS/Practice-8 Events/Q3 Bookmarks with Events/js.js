let yt = document.getElementById("yt")
let ig = document.getElementById("ig")
let wa = document.getElementById("wa")
let ld = document.getElementById("ld")
let gm = document.getElementById("gm")

//new tab
yt.onclick = ()=>{
    window.open("https://www.youtube.com/")
}
ig.onclick = ()=>{
    window.open("https://www.instagram.com/")
}

//same tab replace
wa.onclick = ()=>{
    window.location.replace("https://web.whatsapp.com/")
}
ld.onclick = ()=>{
    window.location.replace("https://www.linkedin.com/feed/")
}
gm.onclick = ()=>{
    window.location.replace("https://mail.google.com/mail/u/0/#inbox")
}