import { createTheme } from '@mui/material/styles';
import { blue, red } from '@mui/material/colors'

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: blue[100],
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
      main: red[100],
    },
    secondary: {
      main: '#f50057',
    },
  },
});

export { lightTheme, darkTheme };