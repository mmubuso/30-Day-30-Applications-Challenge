import React, { Component } from 'react'
import './ImageFilters.css'
import Canvas from '../Canvas/Canvas';

export default class ImageFilters extends Component {


    state = {
        filters: [],
        imagePixels: null
    }

   

    render() {
        return (
            <div className='image-filters'>
                <Canvas
                    />
            </div>
        )
    }
}
