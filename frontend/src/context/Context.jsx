import React, { createContext, useEffect, useState } from "react";
import { doctors } from "../assets/assets";
import axios from "axios";
export const AppContext = createContext(null);
const Context = (props) => {
  const SERVER_URL = "http://localhost:5001";
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    image: "",
    address: "",
    gender: "",
    dob: "",
    phoneNo: "",
  });
  useEffect(() => {
    const fetchUserInfo = async () => {
      if (userAuthenticated) {
        try {
          const url = `${SERVER_URL}/api/user/info`;
          const response = await axios.get(url, { withCredentials: true });
          if (response.data.success) {
            setUserData(response.data.userInfo);
          }
        } catch (error) {
         if(error.status==401||error.status==500){
          setUserAuthenticated(false);
          localStorage.removeItem('userAuthenticated')
         }
        }
      }
    };
    if (userAuthenticated) {
      fetchUserInfo();
    }
  }, [userAuthenticated]);

  useEffect(() => {
    setUserAuthenticated(JSON.parse(localStorage.getItem("userAuthenticated")));
  }, []);

  const contextValue = {
    doctors,
    SERVER_URL,
    userAuthenticated,
    setUserAuthenticated,
    userData,
    setUserData
  };
  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default Context;
