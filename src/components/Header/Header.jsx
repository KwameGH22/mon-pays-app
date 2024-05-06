import React, {useState} from "react";
import { BsMoon } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";
// import { appContext } from "../../Context/ContextProvider";

const Header = () => {
//   const { isDarkMode, ToggleDarkMode } = useContext(appContext);
const [isDarkMode, setIsDarkMode] = useState(false);
const ToggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <header className="header h-[80px] bg-[#fff] mx-[auto] my-[0] flex p-[6%] justify-between gap-[30px] [box-shadow:0px_2px_4px_0px_rgba(0,_0,_0,_0.06)]
                     dark:bg-[#2B3844] dark:[box-shadow:0px_2px_4px_0px_rgba(0,_0,_0,_0.06)] dark:text-white">
      <div className="headerContent ">
        <h1>Where in the world?</h1>
        <div className="headerRight" onClick={ToggleDarkMode}>
          {isDarkMode ? (
            <IoSunnyOutline className="moon" />
          ) : (
            <BsMoon className="moon" />
          )}
          <h3>{isDarkMode ? "Light Mode" : "Dark Mode"}</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
