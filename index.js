let green = document.querySelector('.green')
let container = document.querySelector('.container')
let container_active = document.querySelector('.container active')
green.addEventListener("click", function(){
    container.classList.toggle('active')
})