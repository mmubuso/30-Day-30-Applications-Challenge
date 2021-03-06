import React from 'react';
import './TimeTracker.css';

export default function TimeTracker(props) {
    return (
        <div className='time-tracker'>
            <h3>{props.title}</h3>
            <span className='increment' onClick={() => props.increase(props.name,1)}> +
                </span>
            {(props.number + '').padStart(2,'0')}
            <span className='increment' onClick={() => props.decrease(props.name,-1)}> -
                </span>
        </div>
    )
}
