import { createTheme } from "@mui/material";

const base = createTheme({
  palette: {
    primary: {
      main: "#1f1f1f",
    },
    secondary: {
      main: "#C2E5F2",
    },
    success: {
      main: "#009754",
    },
    info: {
      main: "#458bca",
    },
    warning: {
      main: "#e0c700",
    },
    error: {
      main: "#ee0e00",
    },
    tonalOffset: 0.5,
  },

  typography: {
    fontFamily: "Quicksand, sans-serif",
    fontSize: 12,
    allVariants: {
      color: "#1A120B",
    },
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
        },
      },
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: `12px`,
        },
        notchedOutline: ({ theme }) => ({
          border: `2px solid ${theme.palette.custom.text}`,
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "capitalize",
          boxShadow: "none",
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.primary.extraLight,
          borderTopRightRadius: theme.spacing(0.5),
          borderTopLeftRadius: theme.spacing(0.5),
          "&:hover": {
            backgroundColor: `${theme.palette.primary.extraLight} !important`,
          },
          "&:active": {
            backgroundColor: `${theme.palette.primary.extraLight} !important`,
          },
          "&::before": {
            borderBottom: "none !important",
          },
        }),
      },
    },

    MuiSelect: {
      styleOverrides: {
        select: ({ theme }) => ({
          borderTopRightRadius: theme.spacing(0.5),
          borderTopLeftRadius: theme.spacing(0.5),
        }),
        icon: ({ theme }) => ({ color: theme.palette.custom.text }),
        filled: ({ theme }) => ({
          borderBottom: `2px solid ${theme.palette.custom.text}`,
          backgroundColor: theme.palette.primary.extraLight,
        }),
      },
    },
  },
});

export default base;
