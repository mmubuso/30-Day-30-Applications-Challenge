import React from 'react';
import './Total.css';


export default function Total(props) {


    return (
        <div className='Total'>
            <p>{props.billType} Total </p>
            <input
                className='total-input'
                type='text'
                value={props.total} 
                onChange={() => console.log('i')}/>
        </div>
    )
}
