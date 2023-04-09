export function createNavbar(container) {
    let navbar = document.createElement('div')
    let tabsLabels = ['Home', 'Menu', 'Contact']
    navbar.id = 'navbar'
    for (let i = 0; i < tabsLabels.length; i++) {
        let newTab = document.createElement('li')
        newTab.id = tabsLabels[i]
        newTab.textContent = tabsLabels[i]
        navbar.appendChild(newTab)
    }
    container.appendChild(navbar)
}
