let searchBtn = document.querySelector('#search-btn')
let searchForm = document.querySelector('.header .search-form')
let menuBtn = document.querySelector('#menu-btn')
let navbar = document.querySelector('.header .navbar')


searchBtn.onclick = () =>{
    searchBtn.classList.toggle('fa-x')
    searchForm.classList.toggle('active')
    navbar.classList.remove('active')
    menuBtn.classList.remove('fa-x')
}

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-x')
    navbar.classList.toggle('active')
    searchForm.classList.remove('active')
    searchBtn.classList.remove('fa-x')
}

window.onscroll = () =>{
    navbar.classList.remove('active')
    searchForm.classList.remove('active')
    menuBtn.classList.remove('fa-x')
    searchBtn.classList.remove('fa-x')
}