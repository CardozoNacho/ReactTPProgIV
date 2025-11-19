// Importar los módulos necesarios de React y Material-UI
import React, { useState } from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Stack, Chip } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PeopleIcon from '@mui/icons-material/People'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import { useNavigate } from 'react-router-dom'

// Componente que representa una tarjeta individual de receta
export default function RecetaCard({ receta }) {
  const navigate = useNavigate() // Hook para la navegación entre páginas
  const [imgSrc, setImgSrc] = useState(receta.imagen) // Estado para manejar la imagen de la receta

  // Función para manejar errores al cargar la imagen
  const handleImgError = () => {
    setImgSrc('/placeholder.svg') // Cambiar a una imagen de respaldo si falla la carga
  }

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Imagen de la receta */}
      <CardMedia
        component="img"
        image={imgSrc}
        alt={receta.titulo}
        onError={handleImgError} // Manejar errores de carga de imagen
        sx={{ width: '100%', height: 200, objectFit: 'cover' }}
      />
      {/* Contenido de la tarjeta */}
      <CardContent sx={{ flexGrow: 1, minHeight: 150, minWidth: 400 }}>
        <Typography variant="h6" gutterBottom>{receta.titulo}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{receta.descripcion}</Typography>
        {/* Etiquetas con información adicional */}
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          <Chip icon={<AccessTimeIcon />} label={receta.tiempoPreparacion} size="small" />
          <Chip label={receta.dificultad} size="small" color={receta.dificultad === 'Fácil' ? 'success' : receta.dificultad === 'Media' ? 'warning' : 'error'} />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Chip icon={<PeopleIcon />} label={`${receta.porciones} porciones`} size="small" />
          <Chip icon={<RestaurantIcon />} label={receta.categoria} size="small" />
        </Stack>
      </CardContent>
      {/* Botón para ver más detalles de la receta */}
      <CardActions sx={{ mt: 'auto', px: 2, pb: 2 }}>
        <Button size="small" variant="contained" fullWidth onClick={() => navigate(`/recetas/${receta.id}`)}>Ver Receta</Button>
      </CardActions>
    </Card>
  )
}

