import React, {createContext, useState } from "react";

export const DividendContext = createContext();


export const DividendContextProvider = (props) => {
  const [dividend, setDividend]=useState(0)

const addDividend = (calculatedividend) => {
  if (calculatedividend <= 2000 ) {
    setDividend('Amount is Tax free');
   
  } else if (calculatedividend > 2000 && calculatedividend <= 37500){
    setDividend(0.075 * (calculatedividend - 2000));
  } else if (calculatedividend > 37500 && calculatedividend <= 150000){
    setDividend(0.325 * (calculatedividend - 2000));
  } else {
    setDividend(0.381 * (calculatedividend - 2000));
  } 
 
}

  return (
    <DividendContext.Provider value={{dividend, addDividend}}>
      {props.children}
    </DividendContext.Provider>
  )
}