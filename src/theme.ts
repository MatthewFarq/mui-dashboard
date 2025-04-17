import { createTheme } from "@mui/material/styles";
import type { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      border: Record<string, string>;
      button: Record<string, Record<"enabled" | "hover", string>>;
      state: Record<string, string>;
    };
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    custom?: {
      border?: Record<string, string>;
      button?: Record<string, Record<"enabled" | "hover", string>>;
      state?: Record<string, string>;
    };
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          gap: "8px",
        },
        sizeLarge: {
          padding: "12px 24px",
          fontSize: "15px",
        },
        sizeMedium: {
          padding: "6px 12px",
          fontSize: "14px",
        },
        sizeSmall: {
          padding: "4px 10px",
          fontSize: "13px",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundColor: "#ffffff",
            color: "#000000",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            },
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderColor: "#ffffff",
            color: "#ffffff",
            "&:hover": {
              borderColor: "rgba(255, 255, 255, 0.8)",
              backgroundColor: "transparent",
            },
          },
        },
      ],
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
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
  status: {
    danger: "#F44336",
  },
} as ThemeOptions);

export default theme;
