import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#16191E',
      light: '#017AFF',
      dark: '#1D242C',
      contrastText: '#017AFF',
    },
    text: {
      primary: '#fff',
      secondary: '#8D9295'
    }
  },
  typography: {
    fontFamily: [
      'Montserrat'
    ].join(',')
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          field: {
            backgroundColor: "#33393f",
            border: "none",
            borderRadius: "3rem",
          },
          "& placeholder": {
            color: `white`
          },
          "& label": {
            color: `white`
          },
          "& legend": {
            color: `white`
          },
        }
      }
    }
  }
});

export type AppTheme = typeof theme;