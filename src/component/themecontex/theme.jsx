import React, { createContext, useState, useEffect, useContext } from "react";
import themes from "../theme/theme"; // tumhara themes array

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeIndex, setThemeIndex] = useState(() => {
    const saved = localStorage.getItem("themeIndex");
    return saved ? Number(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem("themeIndex", themeIndex);
  }, [themeIndex]);

  const handleThemeChange = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
  };

  return (
    <ThemeContext.Provider
      value={{
        themeIndex,
        theme: themes[themeIndex],
        handleThemeChange,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
