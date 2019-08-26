import React, { Component } from 'react';
import './Pomodoro.css';
import Button from '../../component/Button/Button';
import CountdownDisplay from '../../component/CountdownDisplay/CountdownDisplay';
import RefreshButton from '../../lib/images/refresh-button-black.svg';
import PlayButton from '../../lib/images/play-button.svg';
import PauseButton from '../../lib/images/pause-bars.svg';

export default class Pomodoro extends Component {

    state = {
        isDisplayingBreak: false,
        breakTime:25,
        breakTotalSeconds: 0,
        sessionTime : 25,
        sessionTotalSeconds: 500,
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
                <div className='refresh-button'>
                    <Button 
                        callFunction={this.resetTimeValue}
                        button={RefreshButton}
                        altText='refresh arrow'
                    />
                </div>
                <CountdownDisplay 
                    seconds={this.state.sessionTotalSeconds}
                    activeTimer='Session'
                />
            </div>
        )
    }
}
