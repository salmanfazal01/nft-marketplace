import { createTheme } from "@mui/material";

const colors = {
  orange: "#FFBD0C",
  purple: "#5142FC",
  pink: "#E250E5",
  white: "#fff",
  black: "#000",
  black2: "#14141F",
  inverse: "#fff",
  grey: "#7A798A",
  grey2: "#343444",
  grey3: '#8A8AA0',
  green: "#47A432",
  red: "#DF4949",
};

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
      contrastText: "#fff",
      ...colors,
    },
    secondary: { main: "#5142FC" },
    background: {
      default: "#14141F",
      darker: "#0D0D11",
      paper: "#343444",
      ...colors,
    },
  },
});

// --primary-color: #343444;
// --primary-color2 : #fff;
// --primary-color4: #EBEBEB;
// --primary-color5: #030303;
// --primary-color6: #ffffff;
// --primary-color7: #343444;
// --bg-section: #14141F;
// --primary-color8: #fff;
