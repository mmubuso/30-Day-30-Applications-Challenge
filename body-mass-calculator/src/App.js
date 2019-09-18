import React, { useState, useEffect } from 'react';
import './App.css';
import Range from './components/Range/Range';

function App() {

  // init state
  const [weight, handleWeightChange] = useState(100)
  const [height, handleHeightChange] = useState(0.5)
  const [bmi, updateBmi] = useState(0)

  // functions
  //handleUpdateToBmi takes event and update
  function handleUpdateToBmi() {
    let newBMI = weight / (height * height) + ''
    if ((/[.]/).test(newBMI)) {
      try {
        newBMI = newBMI.slice(0, (newBMI.indexOf('.') + 2))
      }catch{
        console.log("unable to cut string")
      }
    }
    updateBmi(newBMI)
  }

  useEffect(() => {
    handleUpdateToBmi()
  })



  return (
    <div className="App">
      <Range
        name="weight"
        title="Kilograms"
        handleChange={handleWeightChange}
        min={20}
        max={140}
        step={1}
        value={weight}
        className="casual" />
      <Range
        name="height"
        title="meters"
        handleChange={handleHeightChange}
        min={0.5}
        max={2.5}
        step={0.01}
        value={height}
        className="casual" />
      <div
        className="casual">
        <p className="bmi-item">BMI: {bmi}</p>
      </div>
    </div>
  );
}

export default App;
