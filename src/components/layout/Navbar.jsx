import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Título de la página en la barra de navegación */}
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          Recetas de la Abuela
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
