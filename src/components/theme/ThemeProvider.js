"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";

const ThemeProviderComp = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderComp;
