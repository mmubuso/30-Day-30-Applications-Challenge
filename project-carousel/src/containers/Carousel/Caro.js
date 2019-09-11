import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
        src: './images/trillo.gif',
        altText: 'Slide 1',
        caption: 'Copy of Trello website',
        header: 'Trillo'
    },
    {
        src: '../images/chatter.gif',
        altText: 'Slide 2',
        caption: 'messageing application',
        header: 'Chatter'
    },
    {
        src: '../images/movie.gif',
        altText: 'Slide 3',
        caption: 'mobile app for looking up movies and epiosdes',
        header: 'React Native Movie App'
    },
    {
        src: '../images/weathery2.gif',
        altText: 'Slide 4',
        caption: 'mobile app for looking up the weather',
        header: 'Weathery'
    },
    {
        src: '../images/face-api.gif',
        altText: 'Slide 5',
        caption: 'Capture facial expressions and show them as emojis',
        header: 'Face Recognition App'
    },
    {
        src: '../images/sunrise.gif',
        altText: 'Slide 6',
        caption: 'sunrise alarm that will get brighter when the alarm goes off',
        header: 'Sunrise Alarm'
    },
    {
        src: '../images/to-do-list.gif',
        altText: 'Slide 7',
        caption: 'To do list using react native',
        header: 'To Do List'
    },
    {
        src: '../images/calculator.gif',
        altText: 'Slide 8',
        caption: 'A calculator built with react-native',
        header: 'Mobile Calculator'
    },
    {
        src: '../images/image-filter.gif',
        altText: 'Slide 9',
        caption: 'Adjust a pictures image filters',
        header: 'Image Filter'
    },
    {
        src: '../images/photobooth.gif',
        altText: 'Slide 10',
        caption: 'A webcam photo booth ',
        header: 'Webcam Photobooth'
    },
    {
        src: '../images/tip-calculator.gif',
        altText: 'Slide 11',
        caption: 'A calculator for figuring out the tip',
        header: 'Tip calculator'
    },
    {
        src: '../images/html-video.gif',
        altText: 'Slide 12',
        caption: 'Custom video player buttons',
        header: 'HTML Video Player'
    },
    {
        src: '../images/pomodoro-clock.gif',
        altText: 'Slide 13',
        caption: 'A timer to optomize effiency',
        header: 'Pomodoro Timer'
    },
    {
        src: '../images/simon.gif',
        altText: 'Slide 14',
        caption: 'A web version of the popular simon game',
        header: 'Simon Game'
    },
    {
        src: 'https://media.giphy.com/media/geE494GGm0s2qeAbxy/giphy.gif',
        altText: 'Slide 15',
        caption: 'Techno keyboard that plays animations and sounds',
        header: 'Techno Keyboard'
    }
    
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;