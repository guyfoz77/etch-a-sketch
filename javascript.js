const mainContainer = document.querySelector('.mainContainer');
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

//adds rows to the main container.
for (let i = resolution; i >= 1; i--) {
    mainContainer.appendChild(createRow());
}


//adds event listeners to all the pixels to change colour on mouseover.
const pixels = document.querySelectorAll('.pixel');
pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', function () {
        this.style.backgroundColor = 'white';
    })
})
