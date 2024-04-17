import React, {useContext, createContext, useEffect, useState} from 'react';



export const appContext = createContext();

const ContextProvider = ({children}) => {
  
  const [isDarkMode, setIsDarkMode] = useState(false);

  const ToggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  }

  



  return (
    <ContextProvider.Provider value={{isDarkMode, ToggleDarkMode}}>
      {children}
    </ContextProvider.Provider>
  )
}

const useAppContext = () => {
  const context =useContext(appContext);
  if (!context) {
    throw new Error('useAppContext must be used within a ThemeProvider')
  }
  return context
}

export {ContextProvider, useAppContext}
