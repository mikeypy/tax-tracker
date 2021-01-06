import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { DividendContext } from '../context/DividendContext'




export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const {dividend } = useContext(DividendContext);


  const amounts = transactions.map(transaction => transaction.amount);
  const expense = transactions.map(transaction => transaction.expense);

  const total_amounts = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const total_expense = expense.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const total = Number(total_amounts) +  Number(total_expense)


  let afterTax;
  if (total <= 0) {
    afterTax = 0
  }else {
      afterTax = (19/100) * total
  }  

  const afterCorporationTax = total - afterTax;

  
  return (
    <div>
      <h4>Total Business Profit (Before Tax)</h4>
      <h1>£{total}</h1>

      <hr />

      <h4>Corporation Tax</h4>
      <h1>£{afterTax}</h1>
      <hr />

      <h4>Total Business Profit (After Tax)</h4>
      <h1>£{afterCorporationTax}</h1>

      <hr />

      <h4>Dividend Cash Out Tax</h4>
        <h1>£{dividend}</h1>
            
    </div>
  )
}
