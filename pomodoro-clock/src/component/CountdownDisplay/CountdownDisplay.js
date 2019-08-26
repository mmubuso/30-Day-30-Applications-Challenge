import React from 'react'
import './CountdownDisplay.css'
import Button from '../Button/Button';
import PlayButton from '../../lib/images/play-button.svg';
import PauseButton from '../../lib/images/pause-bars.svg';


export default function CountdownDisplay(props) {

    //convert total seconds into strings of minutes and seconds
    let minutes = ((Math.floor(props.seconds / 60)) + '').padStart(2,'0')
    let seconds = ((props.seconds % 60) + '').padStart(2,'0')

    
    return (
        <div className='countdown-display'>
            <h2>{props.activeTimer}</h2>
            <p className='time-display'>{`${minutes}:${seconds}`}</p>
            <Button 
                callFunction={console.log}
                button={PauseButton}
                altText={'two square horizontal bars'}
            />
            <Button 
                callFunction={console.log}
                button={PlayButton}
                altText={'triangle rotated so that top is pointing left'}
            />
        </div>
    )
}
