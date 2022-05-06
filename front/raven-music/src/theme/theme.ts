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
      secondary: '#8D9295'
    }
  },
});

export type AppTheme = typeof theme;