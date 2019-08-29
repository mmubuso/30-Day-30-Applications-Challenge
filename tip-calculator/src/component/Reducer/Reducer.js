import React from 'react'
import './Reducer.css'

export default function Reducer(props) {

    return (
        <div className='reducer'>
            <p className='title'>{props.title}</p>
            <div className='container-reducer'>
                <div className='area1'>
                    <span onClick={props.handleValueChange(-1)}>-</span>
                </div>
                <div className='area1'>
                    <p>{props.value}</p>
                </div>
                <div className='area1'>
                    <span onClick={props.handleValueChange(1)}>+</span>
                </div>
            </div>
        </div>
    )
}
