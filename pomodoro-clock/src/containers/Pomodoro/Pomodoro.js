import React, { Component } from 'react';
import './Pomodoro.css';
import Button from '../../component/Button/Button';
import CountdownDisplay from '../../component/CountdownDisplay/CountdownDisplay';
import TimeTracker from '../../component/TimeTracker/TimeTracker';
import RefreshButton from '../../lib/images/refresh-button-black.svg';


export default class Pomodoro extends Component {

    state = {
        isDisplayingBreak: false,
        breakTime: 22,
        breakTotalSeconds: 0,
        sessionTime: 23,
        sessionTotalSeconds: 0,
        timeBelowMinute: false,
        showPauseButton: false,
    }

    //handle time increase or decrese
    //input - name of time tracker we are changing 
    //      - value that will increase or decrease value
    handleTimeIncrement = (timeName, num) => {

    }

    //Reset time value for break, and session
    resetTimeValue = () => {

    }

    componentDidMount(){
        let breakTotalSeconds = this.state.breakTime * 60
        let sessionTotalSeconds = this.state.sessionTime * 60
        this.setState({
            breakTotalSeconds,
            sessionTotalSeconds
        })
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
                <div className='time-tracker-container'>
                    <TimeTracker
                        title='break'
                        number={this.state.breakTime}
                        name='breakTime'
                        increase={console.log}
                        decrease={console.log}
                    />
                    <TimeTracker
                        title='session'
                        number={this.state.sessionTime}
                        name='sessionTime'
                        increase={console.log} 
                        decrease={console.log}
                        />
                </div>
            </div>
        )
    }
}
