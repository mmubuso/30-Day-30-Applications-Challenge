import React, { Component } from 'react';
import './Pomodoro.css';
import Button from '../../component/Button/Button';
import CountdownDisplay from '../../component/CountdownDisplay/CountdownDisplay';
import TimeTracker from '../../component/TimeTracker/TimeTracker';
import RefreshButton from '../../lib/images/refresh-button-black.svg';
import wrongSound from '../../lib/audio/alarm_clock.mp3';
import backgroundSound from '../../lib/audio/best_wake_up_tone.mp3';



export default class Pomodoro extends Component {

    state = {
        isDisplayingBreak: false,
        breakTime: 5,
        breakTotalSeconds: 0,
        sessionTime: 25,
        sessionTotalSeconds: 0,
        timeBelowMinute: false,
        showPauseButton: false,
        clearValue: 0
    }

    //handle time increase or decrese
    //input - name of time tracker we are changing 
    //      - value that will increase or decrease value
    handleTimeIncrement = async (timeName, num) => {
        num += this.state[timeName]
        if (num <= 25 && num > 0) {
            await this.setState({ [timeName]: num })
            this.updateTotalSeconds()
        }
    }

    //Reset time value for break, and session
    resetTimeValue = async () => {
        await this.setState({
            breakTime: 5,
            sessionTime: 25,
        })
        this.updateTotalSeconds()
        this.pauseCountdown()
        this.setState({isDisplayingBreak: false})
    }

    componentDidMount() {
        this.updateTotalSeconds()

    }

    //updates the total seconds
    updateTotalSeconds = () => {
        let breakTotalSeconds = this.state.breakTime * 60
        let sessionTotalSeconds = this.state.sessionTime * 60
        this.setState({
            breakTotalSeconds,
            sessionTotalSeconds
        })
    }

    //decresase time and start countdown
    reduceTime = async (timer) => {
        let num = this.state[timer] - 1;
        if (num === 0 && timer === 'sessionTotalSeconds') {
            this.wrong.play()
            await this.startBreakCountDown()
        } else if (num === 0 && timer === 'breakTotalSeconds') {
            await this.pauseCountdown()
            await this.toggleStateValue('isDisplayingBreak')
            this.wrong.play()
            this.updateTotalSeconds()
        }
        this.setState({ [timer]: num })

    }

    //start countdown for break
    startBreakCountDown = async () => {
        await this.pauseCountdown()
        await this.toggleStateValue('isDisplayingBreak')
        await setTimeout(() => this.activateCountdown('break'), 3000)
    }

    //Start/resume timer countdown 
    activateCountdown = (timer) => {
        this.bckgrdMusic.play()
        timer = timer === 'break' ? 'breakTotalSeconds' : 'sessionTotalSeconds'
        let clear = setInterval(() => this.reduceTime(timer), 900)
        this.setState({ clearValue: clear })
    }

    //pause timer counter
    pauseCountdown = () => {
        clearInterval(this.state.clearValue)
    }

    //toggle a value in state on or off
    //input - value to be toggle
    toggleStateValue = (stateValue) => {
        this.setState(state => {
            return { [stateValue]: !state[stateValue] }
        })
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
                <audio ref={e => this.wrong = e}
                    src={wrongSound}></audio>
                <audio loop ref={e => this.bckgrdMusic = e}
                    src={backgroundSound} ></audio>
                <CountdownDisplay
                    seconds={
                        this.state.isDisplayingBreak
                            ?
                            this.state.breakTotalSeconds
                            :
                            this.state.sessionTotalSeconds
                    }
                    activateCountdown={this.activateCountdown}
                    stopCountdown={this.pauseCountdown}
                    activeTimer={
                        this.state.isDisplayingBreak
                            ?
                            'break'
                            :
                            'Session'
                    }
                />
                <div className='time-tracker-container'>
                    <TimeTracker
                        title='break'
                        number={this.state.breakTime}
                        name='breakTime'
                        increase={this.handleTimeIncrement}
                        decrease={this.handleTimeIncrement}
                    />
                    <TimeTracker
                        title='session'
                        number={this.state.sessionTime}
                        name='sessionTime'
                        increase={this.handleTimeIncrement}
                        decrease={this.handleTimeIncrement}
                    />
                </div>
            </div>
        )
    }
}
