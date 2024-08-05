import { createContext, useEffect, useState } from "react";
import "./DarkMode.css";

export const DarkModeContext = createContext();
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);
  return (
    <>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        {children}
      </DarkModeContext.Provider>
    </>
  );
};
