import React, {createContext, useReducer, useEffect } from 'react';
import {AppReducer} from './AppReducer'


// Create Context
export const GlobalContext = createContext();


// Create Provider component for access to Globalstate for all components
export const GlobalProvider = ({ children }) => {
  const [state, dispatch ] = useReducer(AppReducer, [], () =>{
    const localData = sessionStorage.getItem('transactions');
    return localData ? JSON.parse(localData): [];
  });

  //useEffect
  useEffect(() => {
    sessionStorage.setItem('transactions', JSON.stringify(state))

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
  <GlobalContext.Provider value= {{ transactions: state, deleteTransaction, addTransaction}}>
    { children }
  </GlobalContext.Provider>
  );
}