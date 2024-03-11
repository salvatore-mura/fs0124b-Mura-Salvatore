const params = new URLSearchParams(window.location.search);
const productId = params.get('id')
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGVlYzJkN2IxMTAwMTkwZTZlMWQiLCJpYXQiOjE3MDk4OTEzMDksImV4cCI6MTcxMTEwMDkwOX0.7rp2G0XfBTGlJADaKYA5B5ReXzHBLvjNoAK6UZaMa9s';
const nomeModifica = document.getElementById('nome-modifica')
const descrizioneModifica = document.getElementById('descrizione-modifica')
const immagineLinkModifica = document.getElementById('immagine-link-modifica')
const prezzoModifica = document.getElementById('prezzo-modifica')
const brandModifica = document.getElementById('brand-modifica')
const btnInvia = document.getElementById('invia')


fetch('https://striveschool-api.herokuapp.com/api/product/', {
    headers: {
        'Authorization': `Bearer ${token}`
    }
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Errore nella richiesta GET');
        }
        return response.json();
    })
    .then(dati => {
        dati.forEach(el => {
            if (el._id === productId) {
                console.log(el)
                nomeModifica.value = el.name
                descrizioneModifica.value = el.description
                immagineLinkModifica.value = el.imageUrl
                prezzoModifica.value = el.price
                brandModifica.value = el.brand
            }
        })
    })

// INVIA RICHIESTA

function inviaRichiestaPut() {
    
    const params = new URLSearchParams(window.location.search)
    const productId = params.get('id')
    const nome = document.getElementById('nome-modifica').value
    const descrizione = document.getElementById('descrizione-modifica').value
    const immagineLink = document.getElementById('immagine-link-modifica').value
    const prezzo = document.getElementById('prezzo-modifica').value
    const brand = document.getElementById('brand-modifica').value

    const url = `https://striveschool-api.herokuapp.com/api/product/${productId}`

    const data = {
        name: nome,
        description: descrizione,
        immagineUrl: immagineLink,
        price: prezzo,
        brand: brand
    };

    // Esegui la richiesta PUT
    console.log('Dati da inviare:', data)
    fetch(url, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Errore nella richiesta PUT')
            }
            return response.json();
        })
        .then(data => {
            console.log('Risposta dalla richiesta PUT:', data)
            window.location.href = 'homepage.html'
        })
        .then()
        .catch(error => {
            console.error('Errore durante la richiesta PUT:', error)
        })
}

btnInvia.addEventListener('click', function (event) {
    event.preventDefault()
    inviaRichiestaPut()
})


