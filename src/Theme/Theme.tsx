import { createTheme } from "@mui/material/styles";
import React from "react";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
// Create a theme instance.

type ThemeProp = {
  children: JSX.Element;
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF",
      light: "#3A4451",
      light02: "#535C67",
    },
    secondary: {
      main: "#3A4451",
    },
  },
  typography: {
    fontFamily: `"Open Sans", "arial", "Arial", sans-serif`,
  },
});
export default theme;

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
