// RICEVERE VALORI DEL FORM

let invia = document.getElementById('invia')

function formValue(...ids) {
  return ids.map(id => {
    let element = document.getElementById(id)
    return element.value
  })
}

let [nome, descrizione, immagineLink, prezzo, brand] = formValue('nome', 'descrizione', 'immagine-link', 'prezzo', 'brand')

const nuovoProdotto = {
  "name": `${nome}`,
  "description": `${descrizione}`,
  "brand": `${brand}`,
  "imageUrl": `${immagineLink}`,
  "price": `${prezzo}`
}

// INVIO DATI ALL API

invia.addEventListener('click', function (event) {

  event.preventDefault()

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGVlYzJkN2IxMTAwMTkwZTZlMWQiLCJpYXQiOjE3MDk4OTEzMDksImV4cCI6MTcxMTEwMDkwOX0.7rp2G0XfBTGlJADaKYA5B5ReXzHBLvjNoAK6UZaMa9s'

  fetch('https://striveschool-api.herokuapp.com/api/product/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(nuovoProdotto)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Prodotto aggiunto:', data)
      window.location.href = 'homepage.html';
    })
    .catch(error => console.error('Errore:', error))
})



