// Esercizio 1

class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.location = location
    }

    comparaEtà(otherUser) {
        if (this.age === otherUser.age) {
            return `${this.firstName} e ${otherUser.firstName} hanno la stessa età.`
        } else if (this.age > otherUser.age) {
            return `${this.firstName} è più grande di ${otherUser.firstName}.`
        } else {
            return `${this.firstName} è più giovane di ${otherUser.firstName}.`
        }
    }
}

const user1 = new User('Mario', 'Rossi', 30, 'Roma')
const user2 = new User('Luigi', 'Verdi', 25, 'Milano')

console.log(user1.comparaEtà(user2))

// esercizio 2

class Pet {
    constructor(petName, ownerName, species, race) {
        this.petName = petName
        this.ownerName = ownerName
        this.species = species
        this.race = race
    }

    sameOwner(pet) {
        return this.ownerName === pet.ownerName
    }
}

const petForm = document.getElementById('petForm')
const petList = document.getElementById('petList')

petForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const petName = document.getElementById('petName').value
    const ownerName = document.getElementById('ownerName').value
    const specie = document.getElementById('specie').value
    const race = document.getElementById('race').value

    const pet = new Pet(petName, ownerName, specie, race)
    creaLista(pet)
    petForm.reset()
});

function creaLista(pet) {
    const li = document.createElement('li')
    li.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.specie}, Razza: ${pet.race}`
    petList.appendChild(li);
}