function selezionaTesto() {
    let inputElement = document.getElementById("input");
    let inputValue = inputElement.value
    return inputValue
}

function createList() {
    let ulSelector = document.querySelector('ul');
    let text = selezionaTesto()
    let div = document.createElement('div')
    ulSelector.appendChild(div)

    let li = document.createElement('li')
    li.textContent = text;

    let deleteButton = document.createElement('button')
    deleteButton.textContent = 'delete'
    deleteButton.addEventListener('click', function () {
        ulSelector.removeChild(div)
    });

    div.appendChild(li)
    div.appendChild(deleteButton)

    li.addEventListener('click', function () {
        this.classList.add('line');
    });
}


let button = document.getElementById('button')

button.addEventListener('click', createList)

