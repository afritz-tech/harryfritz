import React from "react";
import { FaMoon, RiMenu3Line, MdOutlineWbSunny } from "../../icons";

function Nav({ isDark, toggleDarkMode, toggleDrawer }) {
  return (
    <div className="flex items-center justify-between">
      <img
        src={isDark ? "/Laptop.svg" : "/Laptop.svg"}
        className="h-10"
        alt="logo"
      />

      <button
        className="p-2 text-2xl rounded-md text-gray dark:text-gray hover:bg-fadeGray hover:dark:bg-fadeBlue"
        onClick={toggleDarkMode}
      >
        {isDark ? <MdOutlineWbSunny /> : <FaMoon />}
      </button>

      <button
        onClick={toggleDrawer}
        className="p-2 text-2xl rounded-md text-gray dark:text-gray hover:bg-fadeGray hover:dark:bg-fadeBlue"
      >
        <RiMenu3Line />
      </button>
    </div>
  );
}

export default Nav;
