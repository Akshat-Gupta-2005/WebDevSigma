let title = document.getElementById("btitle")
let cname = document.getElementById("bcname")
let views = document.getElementById("bviews")
let monthsOld = document.getElementById("bmonthsOld")
let duration = document.getElementById("bduration")
let but = document.getElementById("but")
 
let btitle = document.getElementById("title")
let bcname = document.getElementById("cname")
let bviews = document.getElementById("views")
let bmonthsOld = document.getElementById("months")
let bduration = document.getElementById("time")

but.onclick = ()=>{
    btitle.innerHTML = title.value
    bcname.innerHTML = cname.value
    bviews.innerHTML = views.value
    bmonthsOld.innerHTML = monthsOld.value
    bduration.innerHTML = duration.value
}