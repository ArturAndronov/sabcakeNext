import { createTheme } from '@mui/material/styles'
import { blue, orange, red } from '@mui/material/colors'

declare module "@mui/material/styles" {
    interface PaletteOptions {
      myCustomColor?: {
        main: string;
        superDark: string;
        superLight: string;
      },
      customRibRed?: {
        main: string;
        superDark: string;
        superLight: string;
      }
    }
  }
  
  declare module "@mui/material/styles" {
    interface TypographyVariants {
      myVariant: React.CSSProperties;
    }
  
    interface TypographyVariantsOptions {
      myVariant?: React.CSSProperties;
    }
  }
  
  declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
      myVariant: true;
    }
  }
  
  const theme = createTheme({
    palette: {
      customRibRed: {
        main: blue[400],
        superDark: blue[800],
        superLight: blue[100]
      },
      myCustomColor: {
        main: red[400],
        superDark: red[800],
        superLight: red[100]
      }
    },
  
    typography: {
      myVariant: {
        fontSize: "6rem",
        color: orange[500]
      }
    }
  });
  
  export default theme;