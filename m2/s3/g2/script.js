function salvaValore() {
    let nome = document.getElementById("nome");
    let nomeValue = nome.value;
    localStorage.setItem("valoreSalvato", nomeValue);
}

window.onload = function() {
    document.getElementById("salva").addEventListener("click", function() {
        salvaValore()
    })
    let valoreSalvato = localStorage.getItem("valoreSalvato")
    if (valoreSalvato) {
        document.getElementById("nome").value = valoreSalvato
    }
}

function cancellaValore() {
    localStorage.removeItem("valoreSalvato")
}

document.getElementById("cancella").addEventListener("click", function() {
    cancellaValore();
})

let testoLocalStorage = localStorage.getItem("valoreSalvato")

if (testoLocalStorage) {
    let elemento = document.getElementById("nomeTitolo")
    elemento.innerHTML += testoLocalStorage
}

// contatore

function aggiornaContatore() {
    let contatore = localStorage.getItem("contatore")
    contatore++
    localStorage.setItem("contatore", contatore)
    document.getElementById("contatore").textContent = contatore
}
setInterval(aggiornaContatore, 1000)
window.onload = aggiornaContatore