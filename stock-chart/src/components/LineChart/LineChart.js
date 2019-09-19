import React, { Component, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { data, month } from './LineChartData.js'




export default function LineChart(props) {


    let main = () => {
        clearLabelsAndStockData()
        createLabels()
        parseStockData()
        attachCurrencyName()
    }


    // Parse through array and attach stock market low value
    let parseStockData = () => {
        props.data.forEach(item => {
            Object.keys(item).forEach((key, index) => {
                if (index < 9) {
                    uploadStockMarketLowvalue(key, item)
                }
            })
        })
    }

    // upload market low data into datasets
    let uploadStockMarketLowvalue = (key, item) => {
        if ((/[3a]/g).test(key)) {
            data.datasets[0].data.push(item[key])
        }
        if ((/[3b]/g).test(key)) {
            data.datasets[1].data.push(item[key])
        }
    }


    // create labels for all the monts that have occured
    let createLabels = () => {
        for (let i = new Date().getMonth(); i >= 0; i--) {
            data.labels.push(month[new Date(2019, i).getMonth()])
        }
    }

    // Attach currency names to charts
    let attachCurrencyName = () => {
        data.datasets[0].label = props.marketName
        data.datasets[1].label = props.digitalName
    }

    // Clear data from labels and stock data sets
    let clearLabelsAndStockData = () => {
        data.labels = []
        data.datasets[0].data = []
        data.datasets[1].data = []
    }

    main()

    return (
        <div className="col-8 chartsss">
            <h2>Monthly Prices and Volumes for Digital Currency</h2>
            <Line data={data} />
        </div>
    );
}
