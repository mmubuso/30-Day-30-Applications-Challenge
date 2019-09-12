// Budget Maker

// Variables
// DOM elements
const budgetItem = document.querySelector('#budgetName')
const budgetItemPrice = document.querySelector("#budgetCost")
const addItem = document.querySelector("#addItem")
const listGroup = document.querySelector(".list-group")

// total budget
let total = 0
const dataPoints = []
const prices = []

//budjet object
const budget = {
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    animationEnabled: true,
    title: {
        text: "My Budget"
    },
    data: [{
        type: "pie",
        startAngle: 25,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: dataPoints
    }]
}

//functions
// createDataPointObject update dataPoints
function createDataPointObject(y, label) {
    console.log(y, label)
    if (label !== '') {
        total += y
        prices.push(y)
        dataPoints.push({ y, label })
        createListItem(y,label)
        updatePercentages()
        renderChart()
    }
}

function createListItem (y, label){
    let newListItem = document.createElement('li');
    newListItem.className = "list-group-item"
    newListItem.innerText = `Cost: ${y} Item: ${label}`
   listGroup.appendChild(newListItem)
}

function updatePercentages () {
    dataPoints.forEach( function (item,index) {
        item.y = prices[index]/total * 100.0
    })
}

function renderChart() {
    var chart = new CanvasJS.Chart("chartContainer", budget)
    chart.render()
}

//

//event listeners
addItem.addEventListener('click', () => {
    console.log('yes')
    createDataPointObject(Number(budgetItemPrice.value), budgetItem.value)
})






