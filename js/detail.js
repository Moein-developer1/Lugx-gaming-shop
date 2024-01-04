const $ =  document

// preloader

const preloader = $.querySelector('.preloader')
const webPage = $.querySelector('.webpage')

function loadpage () {
    preloader.classList.add('loaded')
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
        $.querySelector('.header__list').style.top = '77px'
    } else {
        navBar.classList.remove('scrolled')
    }


})

// review 

const reviewButtons = $.querySelectorAll('.review__item button')
const reviewContent = $.querySelector('.review__content')
const reviewText = $.querySelectorAll('.review__text')

function showReviews (e) {
    $.querySelector('.clicked').classList.remove('clicked')
    e.target.classList.add('clicked')

    if(e.target.dataset.name === 'description'){
        setTimeout(function(){  
            reviewText.forEach(function(txt){
                txt.style.color = '#000'
            })
        },300)
        reviewContent.innerHTML = `
        <p class="review__text">
        You can search for more templates on Google Search using keywords such as "templatemo digital marketing", "templatemo one-page", "templatemo gallery", etc. Please tell your friends about our website. If you need a variety of HTML templates, you may visit Tooplate and Too CSS websites.
        </p>
        <p class="review__text">
        Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated charcoal. PBR&B fanny pack pok pok gentrify truffaut kitsch helvetica jean shorts edison bulb poutine next level humblebrag la croix adaptogen. Hashtag poke literally locavore, beard marfa kogi bruh artisan succulents seitan tonx waistcoat chambray taxidermy. Same cred meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical gluten-free art party raw denim chillwave tousled try-hard succulents street art.
        </p>
        `;
    } else if (e.target.dataset.name === 'review'){
        reviewContent.innerHTML = `
        <p class="review__text">
        Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated charcoal. PBR&B fanny pack pok pok gentrify truffaut kitsch helvetica jean shorts edison bulb poutine next level humblebrag la croix adaptogen.
        </p>
        <p class="review__text">
        Hashtag poke literally locavore, beard marfa kogi bruh artisan succulents seitan tonx waistcoat chambray taxidermy. Same cred meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical gluten-free art party raw denim chillwave tousled try-hard succulents street art.
        </p>
        `;
    }
}

reviewButtons.forEach(function(btn){
    btn.addEventListener('click',showReviews)
})
