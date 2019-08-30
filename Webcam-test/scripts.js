const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const gallery = document.querySelector('.gallery')

//get video input
async function getVideoInput ()  {
    try{
        let stream = await navigator.mediaDevices.getUserMedia({audio: false, video: true})
        console.log(stream)

        //store the video live stream url in a video tag
        video.srcObject = stream
        // Here we can call the play method to play the content
        video.play()
    }catch(err){
        console.log(err)
    }
}

function paintToCanvas () {
    //Get height and width of video 
    let width = video.videoWidth;
    let height = video.videoHeight;

    console.log(width, height)
    // set the size of the canvas
    canvas.width = width;
    canvas.height = height;

    // 
    return setInterval(() => {
        ctx.drawImage(video,0,0,)
    }, 50)
}

function takePhoto() {
    // The snap 
    snap.currentTime = 0;
    snap.play();

    // Get data from screenshot
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download','screenshot');
    link.innerHTML = `<img src=${data} alt='beautiful person' />`;
    gallery.insertBefore(link, gallery.firstChild);
}

// listen for when the video is ready to be played in order to play it
video.addEventListener('canplay', paintToCanvas)


// Prompt user for access to video camera and video permissions
getVideoInput()