import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return transaction.amount ? (
      <li className= 'plus'>
      {transaction.text} <span> + £{Math.abs(transaction.amount)}</span>
      <button onClick = {() => deleteTransaction(transaction.id)}className="delete-btn">x</button>
    </li>
    ): (
      <li className='minus'>
      {transaction.text} <span> - £{Math.abs(transaction.expense)}</span>
      <button onClick = {() => deleteTransaction(transaction.id)}className="delete-btn">x</button>
    </li>
    )
}
