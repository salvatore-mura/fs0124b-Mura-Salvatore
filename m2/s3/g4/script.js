async function chiamata(query) {
    const apiKey = 'dw85B8Fhctmz5UTBn7AFQhLMzwcC9NzUbDfUp9coE6V56dXWOOag1j1O'
    return await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
        method: 'GET',
        headers: {
            Authorization: apiKey
        }
    }).then(dati => dati.json())
}

function assegnaFoto(query) {
    chiamata(query).then(dati => {
        let img = document.querySelectorAll('.card-img-top')
        dati.photos.forEach((photo, index) => {
            if (img[index]) {
                img[index].src = photo.src.medium;
            }
        })
    })
}
let btnPrimary = document.querySelector('.btn-primary')
let btnSecondary = document.querySelector('.btn-secondary')

btnPrimary.addEventListener('click', () => assegnaFoto('kangaroo'))
btnSecondary.addEventListener('click', () => assegnaFoto('london'))

let editButton = document.querySelectorAll('.btn-group > :nth-child(2)')

editButton.forEach((button) => {
    let hideButton = document.createElement('button')
    hideButton.className = 'btn btn-sm btn-outline-secondary'
    hideButton.innerText = 'Nascondi'
    button.parentNode.replaceChild(hideButton, button)
    hideButton.addEventListener('click', function() {
        let card = this.closest('.col-md-4')
        if (card) {
            card.style.display = "none"
        }
    })
})

function assegnaFoto(query) {
    chiamata(query).then(dati => {
        let img = document.querySelectorAll('.card-img-top');
        dati.photos.forEach((photo, index) => {
            if (img[index]) {
                img[index].src = photo.src.medium;
                let id = photo.id
                let cardFooter = img[index].closest('.card').querySelector('.text-muted')
                if (cardFooter) {
                    cardFooter.textContent = id
                }
            }
        })
    })
}

