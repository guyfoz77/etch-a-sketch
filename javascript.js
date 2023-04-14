let mainContainer = document.querySelector('.mainContainer');
let resolution = 10;

function createPixel() {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    return pixel;
}

function createRow() {
    let row = document.createElement('div')
    row.classList.add('row');
    for (let i = resolution; i >= 1; i--) {
        row.appendChild(createPixel());
    }
    return row;
}

for (let i = resolution; i >= 1; i--) {
    mainContainer.appendChild(createRow());
}

mainContainer.appendChild(createRow());