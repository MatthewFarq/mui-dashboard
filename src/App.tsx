import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import StyleGuide from "./StyleGuide";
import { Box, GlobalStyles } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: "#040404",
            margin: 0,
          },
        }}
      />
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#040404",
        }}
      >
        <StyleGuide />
      </Box>
    </ThemeProvider>
  );
}

export default App;
