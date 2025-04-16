import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#888888",
    },
    background: {
      default: "#121212", // app background
      paper: "#1e1e1e", // card/modal background
    },
    text: {
      primary: "#ffffff",
      secondary: "#aaaaaa",
      disabled: "#555555",
    },
    success: {
      main: "#66bb6a",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ffa726",
    },
    info: {
      main: "#29b6f6",
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
