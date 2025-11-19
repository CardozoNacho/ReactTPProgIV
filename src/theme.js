import { createTheme } from '@mui/material/styles'

// Function to create theme based on mode ('light' | 'dark')
const createAppTheme = (mode = 'light') => {
  const isLight = mode === 'light'
  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#FFC107', // amber
        contrastText: isLight ? '#000' : '#000'
      },
      secondary: {
        main: '#EF4444', // red
        contrastText: '#fff'
      },
      background: {
        default: isLight ? '#fff' : '#121212',
        paper: isLight ? '#fff' : '#1e1e1e'
      }
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: 'none'
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          containedPrimary: {
            backgroundColor: '#EF4444',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#d33b3b'
            }
          }
        }
      }
    }
  })
}

export default createAppTheme
