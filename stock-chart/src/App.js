import React, { useState } from 'react';
import './App.css';
import LineChart from './components/LineChart/LineChart';
import Userinput from './components/Userinput/Userinput';
import Submit from './components/Submit/Submit';
import axios from 'axios';


function App() {

  const [digitalCurrency, updateDigitalCurrencyName] = useState('')
  const [physicalCurrency, updatePhysicalCurrencyName] = useState('')
  const [marketData, updateMarketData] = useState({})
  const [currencyInfo, updateCurrencyInfo] = useState({})
  const [showGraph, toggleShowGraph] = useState(false)

  // Get stock data from api
  let getStockData = async () => {
    if (digitalCurrency === '' || physicalCurrency === '') {
      return;
    }
    try {
      let result = await axios.get(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=${digitalCurrency}&market=${physicalCurrency}&apikey=${"NBOFOQRZ1CMA8WQL"}`)
      updateCurrencyInfo(result.data["Meta Data"])
      let newData = formatDataIntoArray(result.data["Time Series (Digital Currency Monthly)"])
      updateMarketData(newData);
      toggleShowGraph(!showGraph)
    } catch (err) {
      console.log(err)
    }
  }

  // Return data as an array of objects
  let formatDataIntoArray = (data) => {
    return Object.keys(data).map((key, index) => {
      return data[key]
    })
  }

  return (
    <div className="App">
      {
        showGraph
        ?
        null
        :
      <div className="row justify-content-center my-4">
        <Userinput
          value={digitalCurrency}
          handleInput={updateDigitalCurrencyName}
          title={"Digital Currency"}
        />
        <Userinput
          value={physicalCurrency}
          handleInput={updatePhysicalCurrencyName}
          title={"Physical Currency"}
        />
      </div>
      }
      <Submit
        callStock={getStockData} 
        btnName={showGraph ? "New Search" : "Submit"}/>

      <div className=" row justify-content-center my-4">
        {
          showGraph ?
            <LineChart
              marketName={currencyInfo["3. Digital Currency Name"]}
              digitalName={currencyInfo["5. Market Name"]}
              data={marketData}
            />
            :
            null
        }
      </div>

    </div>
  );
}

export default App;
