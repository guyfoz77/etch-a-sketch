const mainContainer = document.querySelector('.mainContainer');
let resolution = 50;
let opacityChange = 0.3;
let containerSize;
const sizeButtons = document.querySelectorAll('.sizeButton');
const resolutionButtons = document.querySelectorAll('.resolutionButton');
const rainbow = document.querySelector('.rainbow');
rainbowMode = false;

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

function getRandomColour() {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    return '#' + red.toString(16) + green.toString(16) + blue.toString(16);
}

function initialise(res) {  //res is the intended number of pixels high and wide (set by global variable resolution initially)
    mainContainer.textContent = '';     //this line removes all th old pixels and replaces them with a blank string.
    for (let i = res; i >= 1; i--) {    
        mainContainer.appendChild(createRow(res));  //adds rows to the main container.
    }
    const pixels = document.querySelectorAll('.pixel');

    pixels.forEach(pixel => {       //adds event listeners to all the pixels to change opacity on mouseover.
        pixel.style.opacity = 1;
        pixel.addEventListener('mouseover', function () {
            if (!rainbowMode) {
                this.style.opacity -= opacityChange;
            } else {
                this.style.backgroundColor = getRandomColour();
            }
        })
})
}

initialise(resolution)
console.log(getRandomColour())

resolutionButtons.forEach(button => {
    button.addEventListener('click', function (e) {
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

rainbow.addEventListener('click', () => {
    rainbow.classList.toggle('rainbowActive');
    rainbowMode = !rainbowMode;
    initialise(resolution);
})