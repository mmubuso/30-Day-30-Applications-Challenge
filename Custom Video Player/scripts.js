// ELEMENTS
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('.fullscreen')

// let mousedown = false
// FUNCTIONS

// if video is paused 
function togglePlay(event) {
    if(event.target.attributes[0].value === 'canPlay'){
        video.paused ? video.play() : video.pause();
    }
}

//change button from play to pause
function toggleButton() {
    video.paused ?  toggle.innerText = '▶️' : toggle.innerText = '❚ ❚' ;
}

//rewind or foward current video time
function skip(event) {
    if (event.target.dataset.skip) {
        video.currentTime += Number(event.target.dataset.skip)
    }
}

//update volume or playback
function handleRangeChange(event) {
    if (event.target.name === 'playbackRate' || event.target.name === 'volume') {
        video[event.target.name] = event.target.value
    }
}

// update statys of progress bar
function updateProgressBar() {
    const videoProgress = ((video.currentTime / video.duration) * 100 + '%');
    progressBar.style.flexBasis = videoProgress;
}

// update progress of video
function updateProgresToClick(event) {
    video.currentTime = (event.offsetX / progress.clientWidth) * video.duration
}

//toggle fullscreen
function handleFullScreenRequest() {
    video.fullscreenElement ? video.exitFullscreen() : video.requestFullscreen()
}

// EVENT LISTENERS


//listen for when video is paused
video.addEventListener('pause', toggleButton);
video.addEventListener('play', toggleButton);


// listen for user clicking on video or play  utton
player.addEventListener('click', togglePlay);
// toggle.addEventListener('click', togglePlay); 

// listen for click on skip buttons
player.addEventListener('click', skip)


// handle change to volume and playbackrate change
player.addEventListener('change', handleRangeChange);
// ranges.forEach(range => range.addEventListener('mousemove', handleRangeChange));

// move progress bar to match video time
video.addEventListener('timeupdate', updateProgressBar)

// click to move video forward
progress.addEventListener('click', updateProgresToClick)

// on mouse movement move bar but only if mouse is pressdown
// progress.addEventListener('mousemove', (event) => mousedown && updateProgresToClick)
progress.addEventListener('mousedown', updateProgresToClick)
// progress.addEventListener('mouseup', mousedown = false)

//listen for toggle on fullscreen button
fullscreen.addEventListener('click', handleFullScreenRequest)
