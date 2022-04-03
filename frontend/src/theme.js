import { createTheme, responsiveFontSizes } from "@mui/material";

export default function CustomTheme() {
    const theme = createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#1f1e1e',
          },
          secondary: {
            main: '#6a7fdb',
          },
          error: {
            main: '#ed474a',
          },
          success: {
            main: '#2d936c',
          },
        },
        props: {
          MuiAppBar: {
            color: 'primary',
          },
        },
    })
      
    return responsiveFontSizes(theme)
}