const gridContainer = document.getElementById('numeri');

for (let i = 1; i <= 76; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.textContent = i;
    gridContainer.appendChild(gridItem);
}


