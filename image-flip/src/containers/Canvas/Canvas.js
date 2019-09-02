import React, { Component } from 'react';
import './Canvas.css';
// import imgSrc from './screenshot.jpeg'

export default class Canvas extends Component {

    state = {
        blur: 0,
        saturate: 1,
        grayScale: 0,
        opacity: 1

    }

    canvasFace = () => {
        this.img.style.filter = `opacity(${this.state.opacity}) blur(${this.state.blur}px) grayscale(${this.state.grayScale}%) saturate(${this.state.saturate})`;
        console.log(this.img.style.filter)
    }

    componentDidUpdate() {
        this.canvasFace()
    }

    handleChange = (event) => {
        let filterValue = event.target.value
        this.setState({ [event.target.name]: filterValue })
    }

    render() {
        return (
            <div className='canvas-container'>
                <img
                    ref={e => this.img = e}
                    src={'https://images.unsplash.com/photo-1556740720-776b84291f8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80'}
                    alt='new' download/>

                <div className='range-container'>
                    <div className='blur-container range-items'>
                        <input
                            onChange={this.handleChange}
                            name='blur'
                            id='blur'
                            type='range'
                            value={this.state.blur}
                            min="0"
                            max="10"
                            step="0.01" />
                        <label htmlFor='blur'>Blur</label>
                    </div>
                    <div className='saturate-container range-items '>
                        <input
                            onChange={this.handleChange}
                            name='saturate'
                            id='saturate'
                            type='range'
                            value={this.state.saturation}
                            min="1"
                            max="10"
                            step="0.01" />
                        <label htmlFor='saturate'>Saturate</label>
                    </div>
                    <div className='gray-scale-container range-items '>
                        <input
                            onChange={this.handleChange}
                            name='grayScale'
                            id='gray-scale'
                            type='range'
                            value={this.state.grayScale}
                            min="0%"
                            max="100%"
                            step="0.01%" />
                        <label htmlFor='gray-scale'>gray-scale</label>
                    </div>
                    <div className='opacity-container range-items '>
                        <input 
                        onChange={this.handleChange} 
                        name='opacity' 
                        id='opacity' 
                        type='range' 
                        value={this.state.opacity} 
                        min="0" 
                        max="1" 
                        step="0.001" />
                        <label htmlFor='opacity'>opacity</label>
                    </div>
                </div>
            </div>
        )
    }
}
