import React from "react";
import { BsMoon } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";
import { useAppContext } from "../../Context/ContextProvider";

const Header = () => {
  const { isDarkMode, ToggleDarkMode } = useAppContext();

  return (
    <header className="header">
      <div className="headerContent">
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
