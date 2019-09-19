import React from 'react'

export default function Userinput(props) {

    


    return (
        <div className="col-sm-4 col-lg-3">
            <label
                className="user-label form-check-label"
                htmlFor={props.name}>{props.title}</label>
            <input
                name={props.name}
                onChange={(event) => props.handleInput(event.target.value)}
                className="user-input form-control"
                value={props.value} />
        </div>
    )
}
