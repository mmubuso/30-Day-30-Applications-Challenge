import React from 'react'

export default function Cost(props) {
    
    console.log(props.total)
   
    

    return (
        <div className='cost'>
            <p className='cost-title'>{props.title}</p>
            <p className='cost-value'>{props.value}</p>
        </div>
    )
}
