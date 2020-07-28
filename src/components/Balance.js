import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
export const Balance = () => {

    const {transactions, income, expense} = useContext(GlobalContext)
//console.log('income '+income)
    const mp = transactions.map(t => t.amount)

    var total = 0;

    if(mp.length !==0){
     total = mp.reduce((acc,amt) => acc+=amt)
    }
    return (
        <React.Fragment>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
       </React.Fragment>
    )
}
