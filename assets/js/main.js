const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if (toggle && nav) {
          toggle.addEventListener('click', () => {
              nav.classList.toggle('show')
          })
    }
}

showMenu('nav-toggle', 'nav-menu');

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.home__title', {})
sr.reveal('.button', {delay: 200})
sr.reveal('.home__img', {delay: 400})
sr.reveal('.home__social-icon', {interval: 200})

sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', {delay: 200})
sr.reveal('.about__text', {delay: 400})

sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__text', {delay: 200})
sr.reveal('.skills__data', {interval: 200})
sr.reveal('.skills__img', {delay: 400})

sr.reveal('.work__img', {interval: 200})

sr.reveal('.contact__input', {interval: 200})

  

const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

name.addEventListener('focus', () => {
    clearFields(name);
})
email.addEventListener('focus', () => {
    clearFields(email);
})
message.addEventListener('focus', () => {
    clearFields(message);
})

document.getElementById("buttonClick").addEventListener("click", () => {
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

checkField(name);
checkField(email);
checkField(message);

if (name && email && message) {
    var templateParams = {
        email: email,
        name: name,
        notes: message,
    };
     
    emailjs.send('service_aiexhyo', 'template_ftz9tbx', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
}

})

const checkField = input => {
if (!input.value) {
    input.classList.add("input__error");
    input.value= ` ${input.id} field must not be empty`;
    document.querySelector(".error").innerHTML="Please check the required fields above";
}
}

const clearFields = (input) => {
input.value = '';
input.classList.remove("input__error");
document.querySelector(".error").innerHTML = "";
}
