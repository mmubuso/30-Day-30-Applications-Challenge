import React from 'react'

export default function Submit(props) {
    return (
        <div>
            <button className="btn btn-primary" onClick={props.callStock}>{props.btnName}</button>
        </div>
    )
}
