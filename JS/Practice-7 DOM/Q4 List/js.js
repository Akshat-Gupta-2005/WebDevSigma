Array.from(document.body.getElementsByTagName("li")).forEach(element => {
    element.style.backgroundColor = "cyan"
    element.style.listStyleType = "none"
    console.log(element.attributes)
});

// document.body.style.backgroundColor = "red"