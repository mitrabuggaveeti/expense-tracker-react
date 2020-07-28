import React,{ useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'



export const AddTransaction = () => {

  
     const [text, setText] = useState('')
     const [amount, setAmount] = useState(0)
     const [type, setType] = useState(null)

     const {addTransaction, resetTransaction, changeTouch}  = useContext(GlobalContext)

     const onSubmit = (e) =>{
         e.preventDefault()
          
         const newTrans = {
             id : Math.floor(Math.random()*100000000),
             text,
             amount : +amount,
             type : type
         }

         setText('')
         setAmount(0)
         setType('Home')
         addTransaction(newTrans)

     }

     const reset = (e) =>{
         e.preventDefault()
        // console.log("reset")
         resetTransaction()
     }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
            <div className="form-control">
                <label HtmlFor="text">Text</label>
                <input type="text" value={text} placeholder="Enter text..." onChange={e=>setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label HtmlFor="amount">Amount <br />
                (negative - expense, positive - income)
                </label>
                <input type="number" placeholder="Enter amount..." value={amount} onChange={e=>setAmount(e.target.value)}/>
            </div>
            <div className="form-control">
              <label HtmlFor="type">Type </label> <br />
              <select name='type'  value={type} onChange={e=> { setType(e.target.value)}}>
                <option value='Home'>Home</option>
                <option value='Food'>Food</option>
                <option value='Health'>Health</option>
                <option value='Transportation'>Transportation</option>
                <option value='Saving'>Saving</option>
              </select> 
            </div>
            <br />
            <button className="btn">Add transaction</button>
            </form>

            <button className="btn btn-reset" onClick={ (e) =>reset(e)}>Reset</button>
        </div>
    )
}
