const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGVlYzJkN2IxMTAwMTkwZTZlMWQiLCJpYXQiOjE3MDk4OTEzMDksImV4cCI6MTcxMTEwMDkwOX0.7rp2G0XfBTGlJADaKYA5B5ReXzHBLvjNoAK6UZaMa9s';


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
    .then(data => {
        console.log('Dati ottenuti:', data)
        if (Array.isArray(data)) {
            data.forEach(element => {
                const template = document.getElementById("template-article")
                const clone = template.content.cloneNode(true)
                const nomeElement = clone.querySelector('.nome-card')
                nomeElement.textContent = element.name

                const card = clone.querySelector('.card')

                card.dataset.cardId = element._id

                const descrizioneElement = clone.querySelector('.descrizione-card')
                descrizioneElement.textContent = element.description

                const immagineElement = clone.querySelector('.immagine-card')
                immagineElement.src = element.imageUrl

                const prezzoElement = clone.querySelector('.prezzo-card')
                prezzoElement.textContent = element.price

                const brandElement = clone.querySelector('.brand-card')
                brandElement.textContent = element.brand
                let main = document.getElementById("prodotti-home")
                main.appendChild(clone)

            })
        } else {
            console.error('I dati ottenuti non sono nel formato atteso:', data)
        }

        const modificaBtn = document.querySelectorAll(".modifica-btn");
        modificaBtn.forEach(btn => {
            btn.addEventListener('click', function gestisciModifica() {
                const card = btn.closest('.card');
                const cardId = card.dataset.cardId;
                window.location.href = `modifica.html?id=${cardId}`;
            });
        })
        const deleteButtons = document.querySelectorAll('.elimina-btn');
        console.log(deleteButtons);

        deleteButtons.forEach(button => {
            button.addEventListener('click', gestisciEliminazione);
        });
    })
    .catch(error => {
        console.error('Errore durante la richiesta:', error)
    })

function gestisciEliminazione() {
    const button = this
        const card = button.closest('.card')
        const productId = card.dataset.cardId
        console.log('ID del prodotto da eliminare:', productId)
    fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Errore nella richiesta DELETE');
        }
        return response.json()
    })
    .then(data => {
        console.log('Prodotto eliminato con successo:', data)
        window.location.reload();
    })
    .catch(error => {
        console.error('Errore durante la richiesta DELETE:', error)
    })
}
