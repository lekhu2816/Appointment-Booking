import React, { createContext, useEffect, useState } from "react";
import { doctors } from "../assets/assets";
export const AppContext = createContext(null);
const Context = (props) => {
  const [userAuthenticated,setUserAuthenticated]=useState(false);
  const SERVER_URL = "http://localhost:5001";
  useEffect(()=>{
    setUserAuthenticated(localStorage.getItem('userAuthenticated'))
  },[])
  console.log(userAuthenticated)
  const contextValue = {doctors, SERVER_URL ,userAuthenticated,setUserAuthenticated};
  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default Context;
