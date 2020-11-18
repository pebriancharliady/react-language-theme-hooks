import React, {createContext } from "react";
import useToggle from '../hooks/useToggle'

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  // const [isDarkMode, setDarkMode] = useState(false);
  const [isDarkMode, toggleDarkMode] = useToggle(false)

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, toggleDarkMode }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
