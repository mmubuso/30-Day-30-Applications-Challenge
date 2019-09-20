// Get all variables
let canvas = document.querySelector('#meme-canvas');
let userFile = document.querySelector('#userFile');
let bottomText = document.querySelector('#btmText');
let topText = document.querySelector('#topText');
let file = document.querySelector('#userFile');
let generateMemeBtn = document.querySelector('#generateButton');
let container;
let ctx = canvas.getContext('2d');
let uploadMemeBtn = document.querySelector('#uploadButton')
let imageDisplay = document.querySelector('.image-row')
let img



// Functions
// init canvas
let createCanvas = () => {
    // init canvas
    canvas.width = 0
    canvas.height = 0
}

// upload image to canvas
let uploadImage = async () => {
    console.log('hello')
    let reader = new FileReader()
    await reader.readAsDataURL(file.files[file.files.length - 1])
    reader.onload = () => {
        let img = new Image;
        img.src = reader.result;
        console.log(img.height)
        drawToCanvas(img)
    }

}

// draw image to canvas
let drawToCanvas = (img) => {
    console.log(img.height)
    canvas.width = img.width
    canvas.height = img.height
    console.log(canvas.height)
    // clean canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // draw image
    ctx.drawImage(img, 0, 0)
}

let drawTextToCanvas = () => {
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.textAlign = 'center';
    if (bottomText !== '' && topText !== '') {
        ctx.globalCompositeOperation = 'source-over';
        console.log(bottomText.value)
        ctx.font = `${canvas.height * .1}px Impact`;
        ctx.fillText(bottomText.value, canvas.width / 2, canvas.height * .95, canvas.width)
        ctx.fillText(topText.value, canvas.width / 2, canvas.height * .1, canvas.width)
        createImageForDownload()
    }
}

let createImageForDownload = () => {
    container = document.createElement('div');
    imageDisplay.appendChild(container)
    let newMeme = new Image();
    newMeme.src = canvas.toDataURL();
    container.appendChild(newMeme);
    container.className = 'meme-display mr-2'
    createDownloadLink()
}

let createDownloadLink = () => {
    let link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.setAttribute('download', 'meme.png');
    link.innerText = "Download Image"
    container.appendChild(link);
}



// Event Listeners
// Listen for click on upload button
uploadMemeBtn.addEventListener('click', uploadImage)
generateMemeBtn.addEventListener('click', drawTextToCanvas)
createCanvas()
