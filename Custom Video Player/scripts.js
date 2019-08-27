// ELEMENTS
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// FUNCTIONS

// if video is paused 
function togglePlay() {
    video.paused ? video.play() : video.pause();
}

//change button from play to pause
function toggleButton() {
    this.paused ? toggle.innerText = '❚ ❚' : toggle.innerText = '▶️';
}

//rewind or foward current video time
function skip() {
    video.currentTime += Number(this.dataset.skip)
}

//update volume or playback
function handleRangeChange() {
    
}



// EVENT LISTENERS


//listen for when video is paused
video.addEventListener('pause', toggleButton);
video.addEventListener('play', toggleButton);


// listen for user clicking on video or play  utton
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

// listen for click on skip buttons
skipButtons.forEach(button => {
    button.addEventListener('click', skip)
})

// handle change to volume and playbackrate change
ranges.forEach(range, () => {
    range.addEventListener('mousedown')
})