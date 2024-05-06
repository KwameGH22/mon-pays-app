import {Route, Routes} from 'react-router-dom';
import { useEffect, useContext } from 'react';
import  ContextProvider  from './Context/ContextProvider';
import { appContext } from './Context/ContextProvider';
import Home from './Pages/Home';
import Page from './Pages/Page';




function App() {

 const {isDarkMode, setIsDarkMode} = useContext(appContext);


  useEffect(() => {
    // Initialize dark mode based on system preference
    const initialDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(initialDarkMode);
  }, []);

  useEffect(() => {
    // Apply dark mode when darkMode state changes
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      console.log("dark mode active");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("light mode active");
    }
  }, [isDarkMode]);

  const handleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };


  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/card/:id/*' element={<Page/>}/>
      </Routes>   
    </div>
  )
}

export default App
