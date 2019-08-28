import React, { useState } from 'react';
import './Total.css';


export default function Total(props) {


    return (
        <div className='Total'>
            <p>{props.billType} Total </p>
            <input
                className='total-input'
                ype='text'
                value={props.total} />
        </div>
    )
}
