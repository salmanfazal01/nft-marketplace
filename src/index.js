import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import CustomThemeProvider from "./contexts/themeContext";
import { CssBaseline } from "@mui/material";
import { CommonContextProvider } from "./contexts/commonContext";

ReactDOM.render(
  <React.StrictMode>
    <CommonContextProvider>
      <CustomThemeProvider>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CustomThemeProvider>
    </CommonContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
