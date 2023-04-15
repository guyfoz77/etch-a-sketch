const mainContainer = document.querySelector('.mainContainer');
let resolution = 50;
let opacityChange = 0.3;
let containerSize = 700;
const sizeButtons = document.querySelectorAll('.sizeButton');
const resolutionButtons = document.querySelectorAll('.resolutionButton');

function createPixel() {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    return pixel;
}

function createRow(res) {
    let row = document.createElement('div')
    row.classList.add('row');
    for (let i = res; i >= 1; i--) {
        row.appendChild(createPixel());
    }
    return row;
}

function initialise(res) {  //res is the intended number of pixels high and wide (set by global variable resolution initially)
    for (let i = res; i >= 1; i--) {    
        mainContainer.appendChild(createRow(res));  //adds rows to the main container.
    }
    const pixels = document.querySelectorAll('.pixel');

    pixels.forEach(pixel => {       //adds event listeners to all the pixels to change opacity on mouseover.
        pixel.style.opacity = 1;
        pixel.addEventListener('mouseover', function () {
            this.style.opacity -= opacityChange;
        })
})
}

initialise(resolution)

resolutionButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        mainContainer.textContent = '';     //this line removes all th old pixels and replaces them with a blank string.
        resolution = e.target.dataset.resolution;
        initialise(resolution);
    })
})

sizeButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        containerSize = e.target.dataset.size;
        mainContainer.style.width = containerSize;
        mainContainer.style.height = containerSize;
    })
})