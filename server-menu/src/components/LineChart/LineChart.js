import React, { Component, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: [],
    datasets: [
        {
            label: 'Market Currency',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,0,192,0.4)',
            borderColor: 'rgba(75,192,0,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,0,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,3,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'Digital Currency',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(30,192,192,0.4)',
            borderColor: 'rgba(30,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(30,192,192,1)',
            pointBackgroundColor: '#444',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(30,192,192,1)',
            pointHoverBorderColor: 'rgba(30,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [15, 39, 20, 11, 51, 15, 20]
        }
    ]
};


const month = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec"
}


export default function LineChart(props) {

    

    // update data set
    let updateDataSet = () => {
        data.labels = []
        for (let i = new Date().getMonth(); i >= 0; i--) {
            data.labels.push(month[new Date(2019, i).getMonth()])
        }
        data.datasets[0].data = []
        data.datasets[1].data = []

        props.data.forEach(item => {
            console.dir(item)
            Object.keys(item).forEach((key, index) => {
                if (index < 12) {
                    if ((/[3a]/g).test(key)) {
                        data.datasets[0].data.push(item[key])
                    }
                    if ((/[3b]/g).test(key)) {
                        data.datasets[1].data.push(item[key])
                    }
                }
            })
        })
        data.datasets[0].label = props.marketName
        data.datasets[1].label = props.digitalName
        
    }

    

    updateDataSet()

    


    return (
        <div className="col-8 chartsss">
            <h2>Monthly Prices and Volumes for Digital Currency</h2>
            <Line data={data} />
        </div>
    );
}
