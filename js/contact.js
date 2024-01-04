const $ =  document

// preloader

const preLoader = $.querySelector('.preloader')
const webPage = $.querySelector('.webpage')

function loadpage () {
    preLoader.classList.add('loaded')
    webPage.classList.remove('hidden')
}

window.addEventListener('load' , () => {
    setTimeout(() => {
        loadpage()
    }, 1000);
})

// hambargur menu

const menuBtn = $.querySelector('.menu__btn')
const navBar = $.querySelector(".nav__bar ")

menuBtn.addEventListener('click',function(){
    menuBtn.classList.toggle('active')
    navBar.classList.toggle('active')
})

document.addEventListener('click' , function(event) {
    
    if(event.target !== menuBtn && event.target.parentNode !== menuBtn){
        closeMenu()
    }
})

$.querySelectorAll('.header__link').forEach(function(link){
    link.addEventListener('click',function(){
        closeMenu()
    })
})

function closeMenu () {
    menuBtn.classList.remove('active')
    navBar.classList.remove('active')
}


// navbar scrolled

window.addEventListener('scroll',function(){
    let scorllTop = window.scrollY 

    if(scorllTop > 0){
        navBar.classList.add('scrolled')
    } else {
        navBar.classList.remove('scrolled')
    }


})