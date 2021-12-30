import { ThemeProvider } from "@mui/material/styles";
import React, { createContext, useState } from "react";
import { themeCreator } from "../config/theme";
import { DARK_MODE, THEME_NAME } from "../constants/theme";

export const ThemeContext = createContext({
  currentTheme: DARK_MODE,
  setTheme: null,
});

const CustomThemeProvider = (props) => {
  // Read current theme from localStorage or maybe from an api
  const curThemeName =
    typeof window !== "undefined"
      ? window?.localStorage?.getItem(THEME_NAME) || DARK_MODE
      : DARK_MODE;

  // State to hold the selected theme name
  const [themeName, _setThemeName] = useState(curThemeName);

  // Get the theme object by theme name
  const theme = themeCreator(themeName);

  const setThemeName = (themeName) => {
    localStorage.setItem(THEME_NAME, themeName);
    _setThemeName(themeName);
  };

  return (
    <ThemeContext.Provider value={setThemeName}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default CustomThemeProvider;
