import {Route, Routes} from 'react-router-dom';


function App() {

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
        {/* <Route path='/' element={}/>
        <Route path='/card/:id/*' element={}/> */}
      </Routes>   
    </div>
  )
}

export default App
