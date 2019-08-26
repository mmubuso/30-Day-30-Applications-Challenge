import React from 'react'
import './CountdownDisplay.css'
import Button from '../Button/Button';
import PlayButton from '../../lib/images/play-button.svg';
import PauseButton from '../../lib/images/pause-bars.svg';

export default function CountdownDisplay(props) {

    //convert total seconds into strings of minutes and seconds
    let minutes = ((Math.floor(props.seconds / 60)) + '')
    let seconds = ((props.seconds % 60) + '').padStart(2, '0')
    let isFontRed = props.seconds <= 60 ? 'red-font' : null
    // props.seconds === 0 ? null: null 
    

    return (
        <div className='countdown-display'>
            <h2>{props.activeTimer}</h2>
            <p className={`time-display ${isFontRed}`}>
                <span className='time-number'>{minutes}</span>
                :
                <span className='time-number'>{seconds}</span>
            </p>
            <Button
                callFunction={props.stopCountdown}
                button={PauseButton}
                altText={'two square horizontal bars'}
            />
            <Button
                callFunction={() => props.activateCountdown(props.activeTimer)}
                button={PlayButton}
                altText={'triangle rotated so that top is pointing left'}
            />
        </div>
    )
}
