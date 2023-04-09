export function createMenuUI(container) {
    let dishes = [{name: 'hamburger', price: '10$'}, 
                  {name: 'spaghetti', price: '17$'}, 
                  {name: 'beef', price: '23$'}, 
                  {name: 'chicken', price: '25$'}]
    for (let i = 0; i < dishes.length; i++) {
        let dishContainer = document.createElement('div')
        dishContainer.id = dishes[i].name
        
    }
}