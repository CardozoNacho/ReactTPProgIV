// Importar los módulos necesarios de React y React Router
import React from 'react'
import RecetasList from '../components/recetas/RecetasList' // Componente para mostrar la lista de recetas

// Componente que representa la página de listado de recetas
export default function RecetasListPage() {
  return (
    <div>
      <RecetasList /> {/* Renderizar el componente de lista de recetas */}
    </div>
  )
}
