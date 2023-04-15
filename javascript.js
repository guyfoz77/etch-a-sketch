const mainContainer = document.querySelector('.mainContainer');
let resolution = 50;
let opacityChange = 0.3;
let containerSize = 700;
const sizeButtons = document.querySelectorAll('.sizeButton');

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


//adds event listeners to all the pixels to change opacity on mouseover.
const pixels = document.querySelectorAll('.pixel');
pixels.forEach(pixel => {
    pixel.style.opacity = 1;
    pixel.addEventListener('mouseover', function () {
        this.style.opacity -= opacityChange;
    })
})

sizeButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        containerSize = e.target.dataset.size;
        mainContainer.style.width = containerSize;
        mainContainer.style.height = containerSize;
        pixels.forEach(pixel => pixel.style.opacity = 1);   //resets all pixels opacity - do we need to do this for just a resize?
    })
})