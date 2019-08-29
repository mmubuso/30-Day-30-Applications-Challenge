import React from 'react'
import './Reducer.css'

export default function Reducer(props) {

    return (
        <div className='reducer'>
            <p className='reducer-title'>{props.title}</p>
            <div className='container-reducer'>
                <div className='area1'>
                    <span className='incrementors' onClick={() => props.handleValueChange(props.title === 'tip' ? -5 : -1 )}>-</span>
                </div>
                <div className='area1'>
                    <p className='reducer-value'>{props.value}</p>
                </div>
                <div className='area1'>
                    <span className='incrementors' onClick={() => props.handleValueChange(props.title === 'tip' ? 5 : 1)}>+</span>
                </div>
            </div>
        </div>
    )
}
