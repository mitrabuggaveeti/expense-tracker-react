import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20, type: 'Home'},
    { id: 2, text: 'Pizza', amount: -30, type: 'Food'},
    { id: 3, text: 'Medicine', amount: -10, type: 'Health' },
    { id: 4, text: 'Uber', amount: -50, type: 'Transportation' },
    { id: 5, text: 'Saving', amount: 300, type: 'Saving' },
    { id: 6, text: 'Table', amount: -120, type: 'Home'},
  ],
  income : 0,
  expense : 0,
  touched : false
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(Transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: Transaction
    });
  }

  function resetTransaction() {
    dispatch({
      type: 'RESET'
    });
  }

  function incomeTot(Inc) {
    dispatch({
      type: 'INCOME',
      payload : Inc
    })
  }

  function expenseTot(Exp) {
    dispatch({
      type: 'EXPENSE',
      payload : Exp
    })
  }

  function changeTouch() {
    dispatch({
      type: 'TOUCH'
    })
  }

  
  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    income : state.income,
    expense : state.expense,
    touched : state.touched,
    deleteTransaction,
    addTransaction,
    resetTransaction,
    incomeTot,
    expenseTot,
    changeTouch
  }}>
    {children}
  </GlobalContext.Provider>);
}