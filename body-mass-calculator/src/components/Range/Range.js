import React from 'react';

const Range = (props) => {

    return (
        <div className="casual">
            <label
                className="label-item"
                htmlFor={props.name}>{props.title}</label>
            <p className="value-item">{props.value}</p>
            <input
                className="range-item"
                name={props.name}
                onChange={(event) => props.handleChange(event.target.value)}
                type="range"
                min={props.min}
                max={props.max}
                step={props.step}
                value={props.value}
                />
        </div>
    )
}

export default Range
