import React, { useState, useEffect } from 'react'
import './Calculator.css'
import Total from '../../component/Total/Total';
import Reducer from '../../component/Reducer/Reducer';
import Cost from '../../component/Cost/Cost';

export default function Calculator() {

    // The total bill
    const [billTotal, updateBill] = useState(0);
    // The tip percent
    const [tipPercent, updateTipPercent] = useState(0);
    // Amount of people to split the bill by
    const [splitAmount, updateSplitAmount] = useState(1);
    // Amount of each individual bill
    const [individualBill, updateIndividualBill] = useState(0);
    // tip amount for each person
    const [tip, updateTip] = useState(0);



    //handleChange from user input
    let handleUserInput = async (event) => {
        let userInput = billTotal
        if (/^[0-9]*$/.test(event.target.value)) {
            userInput = Number(event.target.value)
            await updateBill(userInput)
        }
    }

    // Handle updates to tip percent
    let handleUpdateTipPercent = async (value) => {
        let newTipPercent = tipPercent + value
        if(newTipPercent <= 100 && newTipPercent >= 0){
            await updateTipPercent(newTipPercent)
        }
    }

    //Handle updates to split amount
    let handleUpdateSplitAmount = async (value) => {
        let newSplitAmount = splitAmount + value
        if(newSplitAmount <= 25 && newSplitAmount >= 1){
            await updateSplitAmount(newSplitAmount)
        }
    }

    let handleBillUpdate = () => {
        let newValue = billTotal/splitAmount
        updateIndividualBill(Math.round(newValue * 100) / 100)
    }

    let handleTipUpdate = () => {
        console.log(`${individualBill} ${tipPercent * 100.0/100}`);
        let tipAmount = individualBill * parseFloat(tipPercent /parseFloat(100));
        updateTip(Math.round(tipAmount * 100) / 100)
    }

    useEffect(  () => {
        console.log('updated')
        handleBillUpdate()
        handleTipUpdate()
    })

    
    return (
        <div className='calculator'>
            <Total
                billType={'Bill'}
                total={billTotal}
                updateValue={handleUserInput} />
            <Reducer
                title={'tip'}
                handleValueChange={handleUpdateTipPercent}
                value={tipPercent + '%'}
            />
            <Reducer
                title={'split'}
                handleValueChange={handleUpdateSplitAmount}
                value={splitAmount}
            />
            <div className='cost-container'>
                <Cost
                    title={'Each Bill'}
                    value={individualBill} 
                    />
                <Cost
                    title={'Each Tip'}
                    value={tip + ''} />
            </div>
            <Total
                billType={'Each'}
                total={individualBill + tip}
                updateValue={console.log}
            />
        </div>
    )
}
