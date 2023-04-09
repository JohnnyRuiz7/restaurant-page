export function createHomeUI(container) {
    let homeContainer = document.createElement('div')
    let restaurantName = document.createElement('div')
    let welcomeMessage = document.createElement('div')
    let openingHours = document.createElement('div')
    for (let i = 0; i < 7; i++) {
        let day = document.createElement('li')
        let weekday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        if (i == 6) {
            day.textContent = `${weekday[i]}: Sorry we're closed`
            openingHours.appendChild(day)
        }
        else {
        day.textContent = `${weekday[i]}: 8:00am - 8:00pm`
        openingHours.appendChild(day)
        }
    }
    let location = document.createElement('div')
    homeContainer.id = 'content'
    restaurantName.id = 'restaurant-name'
    welcomeMessage.className = 'home-content'
    openingHours.className = 'home-content'
    location.className = 'home-content'
    restaurantName.textContent = 'The best restaurant'
    welcomeMessage.textContent = 'Hello there, we are a good restaurant lol, come eat here'
    location.textContent = '420 no scope street, Australia'
    container.appendChild(homeContainer)
    homeContainer.append(restaurantName, welcomeMessage, openingHours, location)
}