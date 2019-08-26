import React from 'react';
import './Button.css';

export default function Button(props) {
    return (
        <img
            className='button'
            onClick={props.callFunction}
            src={props.button}
            alt={props.altText}
        />
    )
}
