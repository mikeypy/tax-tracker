import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { DividendTransaction } from './DividendTransaction'

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [text, setText ] = useState('');
  const [amount, setAmount ] = useState(0);
  const [expense, setExpense ] = useState(0);
  

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alert('Please insert a Transaction name')

    } else {
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount,
        expense: -expense
      }
      addTransaction(newTransaction);
      setText('');
      setAmount(0);
      setExpense(0);
    }
  

    }

   
    
   
  return (
    <div className="transaction-calc-container">
    <div>
      <h3>Add New Business Transaction</h3>
      <form onSubmit = {onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Transaction Name</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Transaction..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}  placeholder="Enter amount..." />
          <label htmlFor="amount">Amount <br />
            (negative - expense)</label
          >
          <input type="number" value={expense} onChange={(e) => setExpense(e.target.value)}  placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>      
    </div>

      <div>
        <DividendTransaction />
        </div>
    </div>
  )
}
