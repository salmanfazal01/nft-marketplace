import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function ResponsiveText({
  children,
  variant = "body1",
  ...props
}) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant={variant} {...props}>
        {children}
      </Typography>
    </ThemeProvider>
  );
}
