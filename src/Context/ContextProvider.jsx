import React, {useContext, createContext, useEffect, useState} from 'react';



export const appContext = createContext();
const { Provider } = appContext;

 const ContextProvider = ({children}) => {
  
  const [isDarkMode, setIsDarkMode] = useState(false);

  const ToggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  }

  



  return (
    <Provider value={{isDarkMode, setIsDarkMode, ToggleDarkMode}}>
      {children}
    </Provider>
  )
}
export default ContextProvider

// const useAppContext = () => {
//   const context =useContext(appContext);
//   if (!context) {
//     throw new Error('useAppContext must be used within a rovider')
//   }
//   return context
// }

// export {ContextProvider, useAppContext}
