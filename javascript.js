//run createPixel() 16 times to fill the div with pixels.

let mainContainer = document.querySelector('.mainContainer');
let resolution = 16;

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

mainContainer.appendChild(createRow());

// mainContainer.appendChild(createPixel());