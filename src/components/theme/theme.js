"use client";
const { createTheme } = require("@mui/material");

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "'Poppins', sans-serif",
        },
      },
    },
  },
});

export default theme;
