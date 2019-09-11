import React from 'react';
import './App.css';
import Carousel from './containers/Carousel/Caro';
import Navbar from './containers/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className='display-1'>My Projects</h1>
      <div className='carousel-container'>
        <Carousel />
      </div>
    </div>
  );
}

export default App;
 