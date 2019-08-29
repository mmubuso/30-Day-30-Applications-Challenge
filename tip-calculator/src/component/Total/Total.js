import React from 'react';
import './Total.css';


export default function Total(props) {


    return (
        <div className='total'>
            <p className='total-title'>{props.billType} Total </p>
            <input
                className='total-input'
                type='text'
                value={props.total} 
                onChange={props.updateValue}/>
        </div>
    )
}
