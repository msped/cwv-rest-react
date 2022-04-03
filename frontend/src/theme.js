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
    typography: {
      h1: {
        fontFamily: "Signika"
      },
      h2: {
        fontFamily: "Signika"
      },
      h3: {
        fontFamily: "Signika"
      },
      h4: {
        fontFamily: "Signika"
      },
      h5: {
        fontFamily: "Signika"
      },
      h6: {
        fontFamily: "Signika"
      },
    }
  })
      
  return responsiveFontSizes(theme)
}