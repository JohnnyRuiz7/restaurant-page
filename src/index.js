import './style.css';
import { createNavbar } from './nav-bar';
import { createHomeUI } from './homeUI';
import { createFooter } from './footer';
import { createMenuUI } from './menuUI';
import { createContactUI } from './contactUI';

//Generate the home page//
let body = document.querySelector('body')
let homeContainer = document.createElement('div')
homeContainer.id = 'content'
createNavbar(body)
body.appendChild(homeContainer)
createHomeUI(homeContainer)
createFooter(body)

//Functions to create UI for each tab after clearing current UI//
let content = document.querySelector('#content')
function clearUI() {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

function showHome() {
    clearUI()
    createHomeUI(content)
    menuButton.addEventListener('click', showMenu, {once: true})
    contactButton.addEventListener('click', showContact, {once: true})
}

function showMenu() {
    clearUI()
    createMenuUI(content)
    homeButton.addEventListener('click', showHome, {once: true})
    contactButton.addEventListener('click', showContact, {once: true})
}

function showContact() {
    clearUI()
    createContactUI(content)
    homeButton.addEventListener('click', showHome, {once: true})
    menuButton.addEventListener('click', showMenu, {once: true})
}

//assigning actions to the tabs in the navbar//
let homeButton = document.querySelector('#Home')
let menuButton = document.querySelector('#Menu')
let contactButton = document.querySelector('#Contact')
menuButton.addEventListener('click', showMenu, {once: true})
contactButton.addEventListener('click', showContact, {once: true})
