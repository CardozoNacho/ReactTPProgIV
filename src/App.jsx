import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { RecetasProvider } from './contexts/RecetasContext'
import Navbar from './components/layout/Navbar'
import RecetasListPage from './pages/RecetasListPage'
import RecetaDetallePage from './pages/RecetaDetallePage'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import createAppTheme from './theme'

export default function App() {
  const [mode, setMode] = React.useState(() => {
    try {
      return localStorage.getItem('themeMode') || 'light'
    } catch (e) {
      return 'light'
    }
  })

  React.useEffect(() => {
    try {
      localStorage.setItem('themeMode', mode)
    } catch (e) {}
  }, [mode])

  const colorMode = React.useMemo(() => ({
    toggleColorMode: () => {
      setMode(prev => (prev === 'light' ? 'dark' : 'light'))
    }
  }), [])

  const theme = React.useMemo(() => createAppTheme(mode), [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RecetasProvider>
        <Router>
          <Navbar colorMode={colorMode} mode={mode} />
          <Routes>
            <Route path="/" element={<RecetasListPage />} />
            <Route path="/recetas" element={<RecetasListPage />} />
            <Route path="/recetas/:id" element={<RecetaDetallePage />} />
          </Routes>
        </Router>
      </RecetasProvider>
    </ThemeProvider>
  )
}
