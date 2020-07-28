import React,{useContext, useState} from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import {GlobalContext} from '../context/GlobalState'

export const PieView = () => {
    const {transactions, income, expense} = useContext(GlobalContext)
    const absExp = Math.abs(expense)
    const inc = income/(income+absExp) * 100
    const exp = expense/(income+absExp) * 100

    const Home =Math.abs(transactions.filter(ts => ts.type==='Home').map(ts => ts.amount).reduce((acc,value) => acc+value,0)/(income+absExp) * 100)
    const Food = Math.abs(transactions.filter(ts => ts.type==='Food').map(ts => ts.amount).reduce((acc,value) => acc+value,0)/(income+absExp) * 100)
    const Health = Math.abs(transactions.filter(ts => ts.type==='Health').map(ts => ts.amount).reduce((acc,value) => acc+value,0)/(income+absExp) * 100)
    const Transportation = Math.abs(transactions.filter(ts => ts.type==='Transportation').map(ts => ts.amount).reduce((acc,value) => acc+value,0)/(income+absExp) * 100)
    const Saving = Math.abs(transactions.filter(ts => ts.type==='Saving').map(ts => ts.amount).reduce((acc,value) => acc+value,0)/(income+absExp) * 100)
    
    console.log('test '+transactions.filter(ts => ts.type==='Home').map(ts => ts.amount).reduce((acc,value) => acc+value,0))

    if(income===0 && expense===0){
     return(<p>PieChart</p>)
    }
    console.log('home '+Home+' '+Food+' '+Health)
    return (
        <PieChart
            data={[
            { title: 'Home '+Home, value: Home, color: '#e39e09',label: 'New' },
            { title: 'Food '+Food, value: Food, color: '#bd172d', label: 'old' },
            { title: 'Health '+Health, value: Health, color: '#dbd50f', label: 'old' },
            { title: 'Transportation '+Transportation, value: Transportation, color: '#2c2491', label: 'old' },
            { title: 'Saving '+Saving, value: Saving, color: '#2ecc71', label: 'old' }
          ]}
          animate ={true}
          
      />
    )
}
