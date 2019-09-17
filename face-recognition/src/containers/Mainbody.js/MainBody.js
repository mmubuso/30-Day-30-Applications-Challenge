import React, { Component } from 'react';
import * as faceapi from 'face-api.js'
import './MainBody.css'

export default class MainBody extends Component {

    state = {
        expressions: null,
        displayEmoji: ''
    }

    componentDidMount() {
        this.loadFaceAPi()
    }

    // Upload face models and then launch camera when all models have been uploaded
    loadFaceAPi = async () => {
        try {
            await faceapi.nets.tinyFaceDetector.loadFromUri('/models')
            await faceapi.nets.faceLandmark68Net.loadFromUri('/models')
            await faceapi.nets.faceRecognitionNet.loadFromUri('/models')
            await faceapi.nets.faceExpressionNet.loadFromUri('/models')
            this.launchWebCam()
        } catch (err) {
            console.log(err)
        }

    }

    // Get webcam feed and attach the video object
    launchWebCam = () => {
        navigator.getUserMedia({ video: true },
            (stream) => this.video.srcObject = stream,
            (err) => console.log(err))
    }

    // launch models and detect face
    recognizeFace = () => {

        setInterval(async () => {
            try {
                // Contains  an array of the detected elements from the video stgream
                const detections = await faceapi.detectAllFaces(this.video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
                // We access the first item and grab the expressions onject
                const expressions = detections[0].expressions
                
                // we set our state to hold our expressions
                await this.setState({ expressions })

                this.compareValues()
            }
            catch (err) {
                console.log(err)
            }
        }, 900)
    }

    // Comapare the values of each emotion and the one with the highest value will be displayed
    compareValues = () => {
        let total = 0
        let StringDisplay = ''
        Object.keys(this.state.expressions).forEach(item => {
            if (this.state.expressions[item] > total) {
                total = this.state.expressions[item]
                StringDisplay = item
            }
        })
        this.setState({ displayEmoji: this.emojiMap[StringDisplay] })
    }

    // Created an emoji map to speed up the time complexity 
    emojiMap = {
        'happy': '😄',
        'disgusted': '🤮',
        'angry': '😡',
        'neutral': '😕',
        'sad': '😭',
        'fearful': '😨',
        'surprised': '😮'
    }

    render() {
        return (
            <div className='MainBody'>
                <div className='emoji'>{this.state.displayEmoji}</div>
                <video onPlay={this.recognizeFace} ref={(e) => this.video = e} height='720' width='720' autoPlay muted></video>
            </div>
        )
    }
}
