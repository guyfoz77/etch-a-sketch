//run createPixel() 16 times to fill the div with pixels.

let mainContainer = document.querySelector('.mainContainer');

function createPixel() {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    return pixel;
}


mainContainer.appendChild(createPixel());