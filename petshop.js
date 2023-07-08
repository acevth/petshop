let btn1 = document.querySelector('#z1')
let btn2 = document.querySelector('#t1')
let btn3 = document.querySelector('#n1')

let t2 = document.getElementById('t2')
let n2 = document.getElementById('n2')
let z2 = document.getElementById('z2')

n2.style.display = "none"
t2.style.display = "none"

btn2.addEventListener('click', ()=>{
    t2.style.display = "flex"
    z2.style.display = "none"
    n2.style.display = "none"
})

btn3.addEventListener('click', ()=>{
    t2.style.display = "none"
    z2.style.display = "none"
    n2.style.display = "flex"
})

btn1.addEventListener('click', ()=>{
    t2.style.display = "none"
    z2.style.display = "flex"
    n2.style.display = "none"
})