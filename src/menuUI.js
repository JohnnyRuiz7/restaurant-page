export function createMenuUI(container) {
    let dishes = [{img1: '', name: 'Hamburger', description: 'A hamburguer lol', price: '10$'}, 
                  {img2: '', name: 'Spaghetti', description: 'Spaghetti lol', price: '17$'}, 
                  {img3: '', name: 'Beef', description: 'Just beef lol', price: '23$'}, 
                  {img4: '', name: 'Chicken', description: 'Just chicken lol', price: '25$',}]
    for (let i = 0; i < dishes.length; i++) {
        let dishContainer = document.createElement('div')
        dishContainer.className = 'dishes'
        for (let j = 0; j < Object.keys(dishes).length; j++) {
            let dishInformation = document.createElement('div')
            dishInformation.className = Object.keys(dishes[i])[j]
            dishInformation.textContent = dishes[i][Object.keys(dishes[i])[j]]
            dishContainer.appendChild(dishInformation)
        }
        container.appendChild(dishContainer)
    }
}