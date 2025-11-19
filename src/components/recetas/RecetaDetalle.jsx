// Importar los módulos necesarios de React y Material-UI
import React from 'react'
import { Container, Paper, Typography, Divider, Stack, Chip, List, ListItem, ListItemText, Button } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PeopleIcon from '@mui/icons-material/People'
import { useNavigate } from 'react-router-dom'
import IngredientesList from './IngredientesList' // Componente para mostrar la lista de ingredientes

// Componente que muestra el detalle de una receta específica
export default function RecetaDetalle({ receta }) {
  const navigate = useNavigate() // Hook para la navegación entre páginas
  const [imgSrc, setImgSrc] = React.useState(receta?.imagen) // Estado para manejar la imagen de la receta

  // Función para manejar errores al cargar la imagen
  const handleImgError = () => setImgSrc('/placeholder.svg') // Cambiar a una imagen de respaldo si falla la carga

  // Mostrar un mensaje si la receta no existe
  if (!receta) return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h6">Receta no encontrada</Typography>
      <Button onClick={() => navigate('/recetas')} sx={{ mt: 2 }} variant="contained">Volver al Listado</Button>
    </Container>
  )

  return (
    <Container sx={{ py: 4 }} maxWidth="md">
      {/* Botón para volver al listado de recetas */}
      <Button onClick={() => navigate('/recetas')} sx={{ mb: 2 }}>
        ← Volver al Listado
      </Button>
      <Paper sx={{ p: 2 }} elevation={2}>
        {/* Imagen destacada de la receta */}
        <img src={imgSrc} alt={receta.titulo} onError={handleImgError} style={{ width: '100%', borderRadius: 6, objectFit: 'cover', maxHeight: 420 }} />
        <Typography variant="h4" sx={{ mt: 2 }}>{receta.titulo}</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>{receta.descripcion}</Typography>
        {/* Información general de la receta */}
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <Chip icon={<AccessTimeIcon />} label={receta.tiempoPreparacion} />
          <Chip label={receta.dificultad} color={receta.dificultad === 'Fácil' ? 'success' : receta.dificultad === 'Media' ? 'warning' : 'error'} />
          <Chip icon={<PeopleIcon />} label={`${receta.porciones} porciones`} />
        </Stack>

        <Divider sx={{ my: 2 }} />
        {/* Lista de ingredientes */}
        <Typography variant="h6">Ingredientes</Typography>
        <IngredientesList ingredientes={receta.ingredientes} />

        <Divider sx={{ my: 2 }} />
        {/* Pasos de preparación */}
        <Typography variant="h6">Preparación</Typography>
        <List>
          {receta.pasos.map((p, i) => (
            <ListItem key={i}>
              <ListItemText primary={`${i + 1}. ${p}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  )
}
