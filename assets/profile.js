const servicesButton = document.querySelector('#services-click')
const servicesAccordion = document.querySelector('#accordion-hide-services')

const specialButton = document.querySelector('#special-click')
const specialAccordion = document.querySelector('#accordion-hide-special')

const experienceButton = document.querySelector('#experience-click')
const experienceAccordion = document.querySelector('#accordion-hide-experience')

const educationButton = document.querySelector('#education-click')
const educationAccordion = document.querySelector('#accordion-hide-education')

const navItems = document.querySelector('#navbar-items')
const burgerMenu = document.querySelector('#burger-menu')

servicesButton.addEventListener('click', function () {
	servicesAccordion.classList.toggle('is-hidden')
})

specialButton.addEventListener('click', function () {
	specialAccordion.classList.toggle('is-hidden')
})

experienceButton.addEventListener('click', function () {
	experienceAccordion.classList.toggle('is-hidden')
})

educationButton.addEventListener('click', function () {
	educationAccordion.classList.toggle('is-hidden')
})

burgerMenu.addEventListener('click', function () {
	navItems.classList.toggle('is-active')
})
