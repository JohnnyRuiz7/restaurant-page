export function createContactUI(container) {
    let contacts = [{'contact-name': 'Pepe', position: 'CEO', number: '+5913467347'}, 
                    {'contact-name': 'Juan', position: 'Chef', number: '+692437544'},
                    {'contact-name': 'Diego', position: 'Professional racist', number: '+52981347'}]
    for (let i = 0; i < contacts.length; i++) {
        let contactContainer = document.createElement('div')
        contactContainer.className = 'contacts'
        for (let j = 0; j < Object.keys(contacts).length; j++) {
            let contactInformation = document.createElement('div')
            contactInformation.className = Object.keys(contacts[i])[j]
            contactInformation.textContent = contacts[i][Object.keys(contacts[i])[j]]
            contactContainer.appendChild(contactInformation)
        }
        container.appendChild(contactContainer)
    }
}