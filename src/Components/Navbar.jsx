import React, { useState, useEffect } from "react";
import { Moon, Sun } from "@phosphor-icons/react";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  //function to handle darkmode toggle
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <nav className="flex justify-end items-center px-10 gap-4 py-8">
      <a href="mailto:preciousopia7@gmail.com">
        <button className="bg-pink-500 cursor-pointer hover:bg-pink-600 transition-all ease-in duration-300 px-4 py-2 rounded-md shadow-lg font-semibold text-white">
          Contact Developer
        </button>
      </a>

      <button className="cursor-pointer" onClick={toggleDarkMode}>
        {isDarkMode ? <Sun size={28} /> : <Moon size={28} />}
      </button>
    </nav>
  );
};

export default Navbar;
