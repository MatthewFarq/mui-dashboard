import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import StyleGuide from "./StyleGuide";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyleGuide />
    </ThemeProvider>
  );
}

export default App;
