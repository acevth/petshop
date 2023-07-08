let images1 = document.getElementById("imagebox1")
let images2 = document.getElementById("imagebox2")
let images3 = document.getElementById("imagebox3")

let button1 = document.getElementById("button1")

function pet1(){
    images1.style.display = "flex"
    images2.style.display = "none"
    images3.style.display ="none"
    button1.style.background = "var(--maincolor)"
    button1.style.color = "#fff"
    button2.style.background = "#fff"
    button2.style.color = "var(--maincolor)"
    button3.style.background = "#fff"
    button3.style.color = "var(--maincolor)"
}

function pet2(){
    images1.style.display = "none"
    images2.style.display = "flex"
    images3.style.display ="none"
    button2.style.background = "var(--maincolor)"
    button2.style.color = "#fff"
    button1.style.background = "#fff"
    button1.style.color = "var(--maincolor)"
    button3.style.background = "#fff"
    button3.style.color = "var(--maincolor)"
}
function pet3(){
    images3.style.display = "flex"
    images1.style.display = "none"
    images2.style.display ="none"
    button3.style.background = "var(--maincolor)"
    button3.style.color = "#fff"
    button1.style.background = "#fff"
    button1.style.color = "var(--maincolor)"
    button2.style.background = "#fff"
    button2.style.color = "var(--maincolor)"
}