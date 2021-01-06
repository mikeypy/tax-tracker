import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import {DividendContextProvider} from './context/DividendContext'





function App() {
  return (
      <GlobalProvider>
          <Header />
          <div className="container">
            <DividendContextProvider> 
              <Balance />           
              <IncomeExpenses />
              <AddTransaction />              
              <TransactionList />
          </DividendContextProvider>
              
           
          </div>
    </GlobalProvider>
  );
}

export default App;
