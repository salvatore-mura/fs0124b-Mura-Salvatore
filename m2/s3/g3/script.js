fetch('https://striveschool-api.herokuapp.com/books')
    .then(res => res.json())
    .then(async libri => {
        let container = document.querySelector('#row')

        for (let i = 0; i < libri.length; i += 6) {
            let row = document.createElement("div")
            row.classList.add("row", "row-cols-1", "row-cols-md-2", "row-cols-lg-3")

            for (let j = i; j < i + 6 && j < libri.length; j++) {
                let colonna = generaClone()

                let titolo = colonna.querySelector('.card-title')
                titolo.textContent = libri[j].title

                let prezzo = colonna.querySelector('.prezzo')
                prezzo.textContent = libri[j].price;

                let image = colonna.querySelector('.card-img-top')
                image.src = libri[j].img;

                let button = document.createElement('button')
                button.textContent = 'Elimina'
                button.classList.add('btn', 'btn-danger')

                let cardBody = colonna.querySelector('.card-body')
                cardBody.appendChild(button)

                row.appendChild(colonna)
                
                button.addEventListener('click', () => {
                    let colonna = button.closest('.col')
                    colonna.remove()
                })
            }

            container.appendChild(row)
        }
    })

function generaClone() {
    let template = document.querySelector('#card-template')
    let clone = template.content.cloneNode(true)

    return clone;
}
