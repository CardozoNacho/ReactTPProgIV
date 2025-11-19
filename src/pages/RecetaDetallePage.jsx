// Importar los módulos necesarios de React y React Router
import React from 'react'
import { useParams } from 'react-router-dom'
import RecetaDetalle from '../components/recetas/RecetaDetalle' // Componente para mostrar el detalle de la receta
import { useRecetas } from '../contexts/RecetasContext' // Contexto para manejar las recetas

// Componente que representa la página de detalle de una receta
export default function RecetaDetallePage() {
  const { id } = useParams() // Obtener el ID de la receta desde los parámetros de la URL
  const { getRecetaById, isLoading } = useRecetas() // Obtener funciones y estado desde el contexto

  const receta = getRecetaById(parseInt(id)) // Convertir el ID a número y buscar la receta correspondiente

  // Mostrar un estado de carga mientras se obtienen los datos
  if (isLoading) return null

  // Mostrar un mensaje si la receta no existe
  if (!receta) {
    return (
      <div>
        
        <p>Receta no encontrada</p>
      </div>
    )
  }

  return (
    <div>
      
      <RecetaDetalle receta={receta} /> {/* Renderizar el componente de detalle con la receta */}
    </div>
  )
}
