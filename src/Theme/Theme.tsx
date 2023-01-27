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
      dark01: "#091625",
      dark03: "#3A4451",
      dark04: "#535C67",
      dark05: "#6B737C",
      dark06: "#848A92",
      dark09: "#CED0D3",
      dark10: "#E6E8E9",
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
