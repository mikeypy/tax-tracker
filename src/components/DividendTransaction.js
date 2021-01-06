import React, {useState, useContext} from 'react';
import {DividendContext} from'../context/DividendContext'



export const DividendTransaction = () => {
  const { addDividend } = useContext(DividendContext);
  const [dividend, setDividend ] = useState(0);
 
  


  const onSubmit = (e) => {
    e.preventDefault();
    addDividend(dividend);  
  }
  
  
  
  return (    
      <div>
        
        <h3>Dividends Cash out</h3>
          <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="Dividend">Dividend Amount <br /></label>
                <input type="number" value={dividend} onChange={(e) => setDividend(e.target.value)}  placeholder="Enter amount..." />
            </div>
              <button className="btn btn-danger">Calculate</button>
              <h6>Please put dividend amount you want to cash out to calculate Tax you pay.</h6>
          </form>
        </div>
      
      
    
  )
}
