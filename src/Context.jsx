import React from "react";
import { useContext, createContext, useState, useEffect } from "react";

// export const AppContext = createContext();

const AppContext = createContext();


export const AppProvider = ({ children }) => {
  const [IsThemeDark, setIsThemeDark] = useState(false);
  const[SearchTerm,setSearchTerm,]=useState('Nature')
  
  const ToggleDarkTheme = () =>{
    const newDarkTheme = !IsThemeDark;
    setIsThemeDark(newDarkTheme)
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme',newDarkTheme)
    // console.log(body)
  }

  return (
    <AppContext.Provider value={{ IsThemeDark, ToggleDarkTheme,SearchTerm,setSearchTerm }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
