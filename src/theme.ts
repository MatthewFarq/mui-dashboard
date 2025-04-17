import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      border: Record<string, string>;
      button: Record<string, Record<"enabled" | "hover", string>>;
      state: Record<string, string>;
    };
  }
  interface ThemeOptions {
    custom?: {
      border?: Record<string, string>;
      button?: Record<string, Record<"enabled" | "hover", string>>;
      state?: Record<string, string>;
    };
  }
}

// Define our custom colors as CSS variables
const customColors = {
  buttonPrimaryEnabled: "#ffffff",
  buttonPrimaryHover: "rgba(255, 255, 255, 0.8)", // White with 80% opacity for hover
  borderPrimary: "rgba(255, 255, 255, 0.3)", // White with 30% opacity for borders
};

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
      dark: "rgba(255, 255, 255, 0.8)",
    },
    secondary: {
      main: "rgba(97, 97, 97, 1)",
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
      main: "rgba(102, 187, 106, 1)",
    },
    error: {
      main: "rgba(239, 83, 80, 1)",
    },
    warning: {
      main: "rgba(255, 167, 38, 1)",
    },
    info: {
      main: "rgba(66, 165, 245, 1)",
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
  custom: {
    border: {
      primary: "rgba(255, 255, 255, 0.3)",
      secondary: "rgba(97, 97, 97, 0.3)",
      success: "rgba(102, 187, 106, 0.3)",
      error: "rgba(239, 83, 80, 0.3)",
      warning: "rgba(255, 167, 38, 0.3)",
      info: "rgba(66, 165, 245, 0.3)",
    },
    button: {
      primary: {
        enabled: "#FFFFFF",
        hover: "#D7D7D7",
      },
      secondary: {
        enabled: "rgba(97, 97, 97, 1)",
        hover: "rgba(97, 97, 97, 0.8)",
      },
      success: {
        enabled: "rgba(102, 187, 106, 1)",
        hover: "rgba(102, 187, 106, 0.8)",
      },
      error: {
        enabled: "rgba(239, 83, 80, 1)",
        hover: "rgba(239, 83, 80, 0.8)",
      },
      warning: {
        enabled: "rgba(255, 167, 38, 1)",
        hover: "rgba(255, 167, 38, 0.8)",
      },
      info: {
        enabled: "rgba(66, 165, 245, 1)",
        hover: "rgba(66, 165, 245, 0.8)",
      },
    },
    state: {
      enabled: "rgba(255, 255, 255, 0.7)",
      hovered: "#FFFFFF",
      focused: "#FFFFFF",
      disabled: "rgba(97, 97, 97, 0.4)",
      error: "#F44336",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        // Only allow contained variant for non-primary buttons
        variant: (props) => {
          if (props.color === "primary") return props.variant || "contained";
          return "contained";
        },
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "9999px",
          fontFamily: '"Plus Jakarta Sans", "Helvetica", "Arial", sans-serif',
          fontStyle: "normal",
          fontWeight: 700,
          textTransform: "uppercase",
          gap: "8px",
          "&:hover": {
            boxShadow: "none",
          },
          "&:focus": {
            outline: "none", // Remove default focus outline
          },
          "&:focus-visible": {
            outline: "2px solid rgba(255, 255, 255, 0.8)",
            outlineOffset: "2px",
          },
        },
        sizeLarge: {
          padding: "12px 24px",
          fontSize: "0.9375rem",
          lineHeight: "1.5",
          letterSpacing: "0.375rem",
        },
        sizeMedium: {
          padding: "6px 12px",
          fontSize: "0.875rem",
          lineHeight: "1.5",
          letterSpacing: "0.35rem",
        },
        sizeSmall: {
          padding: "4px 10px",
          fontSize: "0.8125rem",
          lineHeight: "1.5",
          letterSpacing: "0.325rem",
        },
        contained: {
          boxShadow: "none",
          "&.MuiButton-containedPrimary": {
            backgroundColor: customColors.buttonPrimaryEnabled,
            color: "#121212",
            "&:hover": {
              backgroundColor: customColors.buttonPrimaryHover,
            },
            "&.Mui-disabled": {
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              color: "rgba(255, 255, 255, 0.4)",
            },
          },
          "&.MuiButton-containedSecondary": {
            backgroundColor: "rgba(66, 66, 66, 0.4)", // #424242 with 40% opacity
            color: "#FFFFFF",
            border: "1px solid #616161",
            "&:hover": {
              backgroundColor: "#424242", // Full opacity on hover
              border: "1px solid #616161", // Maintain border on hover
            },
            "&.Mui-disabled": {
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              color: "rgba(255, 255, 255, 0.4)",
              border: "none", // Remove border in disabled state
            },
          },
          "&.MuiButton-containedSuccess": {
            backgroundColor: "rgba(76, 175, 80, 0.4)", // #4CAF50 with 40% opacity
            color: "#FFFFFF",
            border: "1px solid rgba(102, 187, 106, 0.5)", // #66BB6A with 50% opacity
            "&:hover": {
              backgroundColor: "#4CAF50", // Full opacity on hover
              border: "1px solid rgba(102, 187, 106, 0.5)", // Maintain border on hover
            },
            "&.Mui-disabled": {
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              color: "rgba(255, 255, 255, 0.4)",
              border: "none", // Remove border in disabled state
            },
          },
          "&.MuiButton-containedError": {
            backgroundColor: "rgba(244, 67, 54, 0.4)", // #F44336 with 40% opacity
            color: "#FFFFFF",
            border: "1px solid rgba(239, 83, 80, 0.5)", // #EF5350 with 50% opacity
            "&:hover": {
              backgroundColor: "#F44336", // Full opacity on hover
              border: "1px solid rgba(239, 83, 80, 0.5)", // Maintain border on hover
            },
            "&.Mui-disabled": {
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              color: "rgba(255, 255, 255, 0.4)",
              border: "none", // Remove border in disabled state
            },
          },
          "&.MuiButton-containedWarning": {
            backgroundColor: "rgba(255, 167, 38, 0.4)", // #FFA726 with 40% opacity
            color: "#FFFFFF",
            border: "1px solid rgba(255, 167, 38, 0.5)", // #FFA726 with 50% opacity
            "&:hover": {
              backgroundColor: "#FFA726", // Full opacity on hover
              border: "1px solid rgba(255, 167, 38, 0.5)", // Maintain border on hover
            },
            "&.Mui-disabled": {
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              color: "rgba(255, 255, 255, 0.4)",
              border: "none", // Remove border in disabled state
            },
          },
          "&.MuiButton-containedInfo": {
            backgroundColor: "rgba(25, 118, 210, 0.4)", // #1976D2 with 40% opacity
            color: "#FFFFFF",
            border: "1px solid rgba(66, 165, 245, 0.5)", // #42A5F5 with 50% opacity
            "&:hover": {
              backgroundColor: "#1976D2", // Full opacity on hover
              border: "1px solid rgba(66, 165, 245, 0.5)", // Maintain border on hover
            },
            "&.Mui-disabled": {
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              color: "rgba(255, 255, 255, 0.4)",
              border: "none", // Remove border in disabled state
            },
          },
        },
        outlined: {
          borderWidth: "2px",
          "&.MuiButton-outlinedPrimary": {
            borderColor: customColors.borderPrimary,
            color: customColors.buttonPrimaryEnabled,
            "&:hover": {
              borderColor: customColors.borderPrimary,
              borderWidth: "2px",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
            },
          },
          // Hide all non-primary outlined buttons
          "&.MuiButton-outlinedSecondary, &.MuiButton-outlinedSuccess, &.MuiButton-outlinedError, &.MuiButton-outlinedWarning, &.MuiButton-outlinedInfo":
            {
              display: "none",
            },
        },
        text: {
          "&.MuiButton-textPrimary": {
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.08)",
            },
          },
          // Hide all non-primary text buttons
          "&.MuiButton-textSecondary, &.MuiButton-textSuccess, &.MuiButton-textError, &.MuiButton-textWarning, &.MuiButton-textInfo":
            {
              display: "none",
            },
        },
      },
    },
  },
});

export default theme;
