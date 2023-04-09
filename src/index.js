import './style.css';
import { createNavbar } from './nav-bar';
import { createHomeUI } from './homeUI.js';
import { createFooter } from './footer';

//Generate the home page//
let body = document.querySelector('body')
createNavbar(body)
createHomeUI(body)
createFooter(body)

//Functions to create UI for each tab//
let content = document.querySelector('#content')
function clearUI() {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

function showHome() {
    clearUI()
    createHomeUI(body)
}

function showMenu() {
    clearUI()
}

function showContact() {
    clearUI()
}

//assigning actions to the tabs in the navbar//
let homeButton = document.querySelector('#Home')
let menuButton = document.querySelector('#Menu')
let contactButton = document.querySelector('#Contact')
menuButton.addEventListener('click', showMenu, {once: true})
contactButton.addEventListener('click', showContact, {once: true})
