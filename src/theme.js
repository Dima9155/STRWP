import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: "#4a90e2",
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      default: "#f0f2f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#333",
      secondary: "#666",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h4: {
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
      color: "#333",
    },
  },
  shape: {
    borderRadius: 8,
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#f99096",
    },
    secondary: {
      main: "#d10046",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffbe8b",
      secondary: "#aaaaaa",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h4: {
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
      color: "#c33b3b",
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export { lightTheme, darkTheme };