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

// filterable cards

// select filter buttons and cards

const filterButtons = $.querySelectorAll('.filter__butttons button')
const filterableCards = $.querySelectorAll('.filterable__cards .card')

// define filterable cards
function filterCards(e) {
    $.querySelector('.button__active').classList.remove('button__active')
    e.target.classList.add('button__active')

    filterableCards.forEach(function(card){
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === 'all'){
            card.classList.add('show')
            card.classList.remove('hide')
        } else {
            card.classList.remove("show")
            card.classList.add('hide')
        }
    })
}

// add click event for buttons
filterButtons.forEach(function(btn){
    btn.addEventListener('click',filterCards)
})