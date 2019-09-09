// Get all variables 
const currentTime = document.querySelector('.current-time')
// User inputs
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const timePeriod = document.querySelector('#time-period')
let alarmTime = 0


//current time display
const currentHours = document.querySelector('.current-hours')
const currentMinutes = document.querySelector('.current-minutes')
const currentSeconds = document.querySelector('.current-seconds')
let opacityLevel = 0

// Button selector
const button = document.querySelector('.set-timer-button')


// sunrise background
const sunrise = document.querySelector('.sunrise')

//functions
setInterval(() => {
    currentHours.innerText = new Date().getHours()
    currentMinutes.innerText = (new Date().getMinutes() + '').padStart(2, '0')
    currentSeconds.innerText = (new Date().getSeconds() + '').padStart(2, '0')
}, 1000)

// convert the time and minutes into milliseconds
let convertTime = (hours, minutes) => {
    alarmTime = (hours * 3600000) + (minutes + 60000);
}

// validate the hours 
let validateHours = () => {
    if (Number(hours.value) === Number(currentHours.innerText)) {
        return true
    } else {
        return false
    }
}

// valdiate miun
let valdidateMinute = () => {
    let minuteDifference = Number(minutes.value) - Number(currentMinutes.innerText)
    if ( minuteDifference === 1)  {
        return true
    }else{
        return false
    }
}

let updateOpacity = () => {
    if (validateHours() && valdidateMinute()) {
        opacityLevel =  (Number(currentSeconds.innerText) / 60)
        console.log('updating opacity to ' + opacityLevel)

    } else {
        console.log(`current opacity is ${opacityLevel}`)
        opacityLevel = 0
    }

}

let changeOpacity = () => {
    setInterval(() => {
        updateOpacity()
        sunrise.style.opacity = opacityLevel
    },1000)
}

changeOpacity()
//add event listenrs



