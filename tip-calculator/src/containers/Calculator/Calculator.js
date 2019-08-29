import React, { useState } from 'react'
import './Calculator.css'
import Total from '../../component/Total/Total';
import Reducer from '../../component/Reducer/Reducer';

export default function Calculator() {

    // The total bill
    const [ billTotal, updateBill ] = useState(255);
    // The tip percent
    const [ tipPercent, updateTipPercent ] = useState(0.0);
    // Amount of people to split the bill by
    const [ splitAmount, updateSplitAmount ] = useState(0);
    // Amount of each individual bill
    const [ individualBill, updateIndividualBill ] = useState(0.0);
    // tip amount for each person
    const [ tip, updateTip ] = useState(0.0);


    return (
        <div className='calculator'>
            <Total 
            billType={'Bill'}
            total={billTotal}/>
            <Reducer 
                title={'tip'}
                handleValueChange={updateTipPercent}
                value={tipPercent + '%'}
            />
             <Reducer 
                title={'split'}
                handleValueChange={updateSplitAmount}
                value={splitAmount}
            />
        </div>
    )
}
