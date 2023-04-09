export function createFooter(container) {
    let footer = document.createElement('div')
    footer.id = 'footer'
    footer.textContent = 'All rights reserved 2023®'
    container.appendChild(footer)
}