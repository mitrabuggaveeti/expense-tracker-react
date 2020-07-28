import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {PieView} from './Pie'
export const IncomeExpenses = () => {
  const {transactions,  incomeTot, expenseTot,income, expense, touched, changeTouch} = useContext(GlobalContext)
  const amts = transactions.map(ts => ts.amount)
 console.log('amts '+amts)
  var inc = 0 ;
  var exp = 0 ;

  console.log(income + " "+expense)
  if(amts.length !== 0){
     inc = amts.filter( am => am>0).reduce((acc,value) => acc+=value, 0)
     exp = amts.filter( am => am<0).reduce((acc,value) => acc+=value, 0)
  }

    if(touched === false){
      changeTouch()
      incomeTot(inc)
      expenseTot(exp)
    }

    return (
      <React.Fragment>
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p  className="money plus">+${inc}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${exp}</p>
        </div>
      </div>
      <PieView />
      </React.Fragment>
    )
}
