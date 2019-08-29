import React from 'react'
import './Cost.css'

export default function Cost(props) {   

    return (
        <div className='cost'>
            <p className='cost-title'>{props.title}</p>
            <p className='cost-value'>{props.value}</p>
        </div>
    )
}
