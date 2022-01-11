import { createTheme } from "@mui/material";

const colors = {
  orange: "#FFBD0C",
  purple: "#5142FC",
  pink: "#E250E5",
  white: "#fff",
  black: "#000",
  inverse: "#000",
  grey: "#7A798A",
  green: "#47A432",
  red: "#DF4949",
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5142FC",
      contrastText: "#14141F",
      ...colors,
    },
    secondary: { main: "#fff" },
    background: {
      default: "#fff",
      paper: "#fff",
      ...colors,
    },
  },
});

// --primary-color : #fff;
// --primary-color2: #1F1F2C;
// --primary-color3: #5142FC;
// --primary-color4: #7A798A;
// --primary-color5: #F8F8F8;
// --primary-color6: #14141F;
// --primary-color7: #F8F8F8;
// --bg-section : #fff;
// --primary-color8: #7A798A;
