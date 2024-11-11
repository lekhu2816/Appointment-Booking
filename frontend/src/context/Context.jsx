import React, { createContext } from 'react'
import { doctors } from '../assets/assets';
export const AppContext=createContext(null);
const Context = (props) => {
  const contextValue={doctors}
  return (
   
    < AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  )
}

export default Context