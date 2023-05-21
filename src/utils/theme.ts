import { createTheme } from '@mui/material/styles';
import { blue, red } from '@mui/material/colors'

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: "#000000",
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: '#f50057',
    },
  },
});

export { lightTheme, darkTheme };