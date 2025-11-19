// Importar los módulos necesarios de React y Material-UI
import React from 'react'
import { Container, CircularProgress } from '@mui/material'
import Grid from '@mui/material/GridLegacy' // Usar la implementación legacy de Grid
import RecetaCard from './RecetaCard' // Importar el componente de tarjeta de receta
import { useRecetas } from '../../contexts/RecetasContext' // Contexto para manejar las recetas

// Componente que muestra una lista de recetas en formato de grilla
export default function RecetasList() {
  const { recetas, isLoading } = useRecetas() // Obtener recetas y estado de carga desde el contexto

  // Mostrar un indicador de carga mientras se obtienen las recetas
  if (isLoading) return (
    <Container sx={{ py: 6, textAlign: 'center' }}>
      <CircularProgress />
    </Container>
  )

  return (
    <Container sx={{ py: 4, px: { xs: 2, sm: 3 } }} maxWidth="lg">
      {/* Grilla para mostrar las tarjetas de recetas */}
      <Grid container spacing={3} sx={{ alignItems: 'stretch', justifyContent: 'center' }}>
        {recetas.map((receta) => (
          <Grid item key={receta.id} xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
            <RecetaCard receta={receta} /> {/* Tarjeta individual de receta */}
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
