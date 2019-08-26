import React, { Component } from 'react'
import './Pomodoro.css'

export default class Pomodoro extends Component {

    state = {
        isDisplayingBreak: false,
        breakTime:25,
        sessionTime : 25,
        timeDisplayed :[0,0,0,0],
        timeBelowMinute :false,
        showPauseButton :false,
    }

    //handle time increase or decrese
    //input - name of time tracker we are changing 
    //      - value that will increase or decrease value
    handleTimeIncrement = (timeName, num) => {

    }

    //Reset time value for break, and session
    resetTimeValue = () => {

    }

    //Start/resume timer countdown 
    activateCountdown = () => {

    }

    //pause timer counter
    pauseCountdown = () => {

    }

    //toggle a value in state on or off
    //input - value to be toggle
    toggleStateValue = (stateValue) => {

    }


    render() {
        return (
            <div className='pomodoro'>
                
            </div>
        )
    }
}
