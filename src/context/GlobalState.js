import React, {createContext, useReducer, useEffect } from 'react';
import {AppReducer} from './AppReducer'

const localStorageTransactions = JSON.parse(
  localStorage.getItem('transactions')
);


//Initial Global State
const initialState = {
  transactions: localStorageTransactions    
}

// Create Context
export const GlobalContext = createContext(initialState);


// Create Provider component for access to Globalstate for all components
export const GlobalProvider = ({ children }) => {
  const [state, dispatch ] = useReducer(AppReducer, initialState);

  //useEffect
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state.transactions))

  }, [state]);

  //disptach actions i.e action.type && action.payload
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (
  <GlobalContext.Provider value= {{ transactions: state.transactions, deleteTransaction, addTransaction}}>
    { children }
  </GlobalContext.Provider>
  );
}