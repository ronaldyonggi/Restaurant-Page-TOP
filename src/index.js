import generateHome from "./tabs/home";
import generateMenu from "./tabs/menu";
import generateContact from "./tabs/contact";

let content = document.getElementById('content');




let homeNav =document.getElementById('home-nav')
let menuNav = document.getElementById('menu-nav')
let contactNav = document.getElementById('contact-nav')

homeNav.addEventListener('click', () => {
  // Only do action if the nav doesn't have the 'selected' class
  if (!homeNav.classList.contains('selected')) {
    generateHome(content)
    homeNav.classList.add('selected')
    menuNav.classList.remove('selected')
    contactNav.classList.remove('selected')
  }
})

menuNav.addEventListener('click', () => {
  if (!menuNav.classList.contains('selected')) {
    generateMenu(content)
    menuNav.classList.add('selected')
    homeNav.classList.remove('selected')
    contactNav.classList.remove('selected')
  }
})

contactNav.addEventListener('click', () => {
  if (!contactNav.classList.contains('selected')) {
    generateContact(content)
    contactNav.classList.add('selected')
    homeNav.classList.remove('selected')
    menuNav.classList.remove('selected')
  }
})

// In the beginning by default shows home page
generateHome(content);