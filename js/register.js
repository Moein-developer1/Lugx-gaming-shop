const $ = document

// preloader

const preLoader = $.querySelector('.preloader')
const webPage = $.querySelector('.webpage')

function loadPage () {
    preLoader.classList.add('loaded')
    webPage.classList.remove('hidden')
}

window.addEventListener('load', () => {
   setTimeout(() => {
       loadPage()
    }, 1000);
})

// show and hide password

const showBtn = $.querySelectorAll('form .input__field i')
const inputElems = $.querySelectorAll('form .input__field input')
const inputPasswordElem = $.querySelectorAll('form .input__field .password__input')

showBtn.forEach(btn => {
    btn.addEventListener('click' , () => {
        if(btn.previousElementSibling.previousElementSibling.type == 'password') {
            showInputValue(btn)
        } else {
            hideInputValue(btn)
        }
    })
})

function showInputValue (btn) {
    btn.className = 'fa-solid fa-eye-slash'
    btn.previousElementSibling.previousElementSibling.type = 'text'
}

function hideInputValue (btn) {
    btn.className = 'fa-solid fa-eye'
    btn.previousElementSibling.previousElementSibling.type = 'password'
}

// convert to sign up form or sign in form

const signInsignUpLink = $.querySelectorAll('.form__content .bottom__link a')

signInsignUpLink.forEach(link => {
    link.addEventListener('click' , () => {
        event.preventDefault()
        document.body.classList[link.id === 'sign__up-link' ? 'add' : 'remove']('show__sign-up')
        clearInputs()
    })
})

const clearInputs = () => {
    inputElems.forEach(input => {
        input.value = ''
    })

    inputPasswordElem.forEach(input => {
        input.type = 'password'
    })

    showBtn.forEach(i => {
        i.className = 'fa-solid fa-eye'
    })
}

// close at register page

const closeFormBtn = document.querySelectorAll('.close')

closeFormBtn.forEach(btn => {
    btn.addEventListener('click' , () => {
        history.back()
    })
})