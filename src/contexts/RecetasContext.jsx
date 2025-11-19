// Importar los módulos necesarios de React
import React, { createContext, useContext, useState, useEffect } from 'react'
import recetasData from '../data/recetas.json' // Importar los datos de recetas desde un archivo JSON

// Crear el contexto para las recetas
const RecetasContext = createContext()

// Proveedor del contexto que envuelve la aplicación
export function RecetasProvider({ children }) {
  const [recetas, setRecetas] = useState([]) // Estado para almacenar las recetas
  const [isLoading, setIsLoading] = useState(true) // Estado para manejar el indicador de carga

  // Efecto para cargar las recetas al montar el componente
  useEffect(() => {
    // Simular una llamada a una API con un retraso
    setTimeout(() => {
      setRecetas(recetasData) // Cargar los datos de recetas
      setIsLoading(false) // Cambiar el estado de carga a falso
    }, 1000)
  }, [])

  // Función para obtener una receta por su ID
  const getRecetaById = (id) => recetas.find((receta) => receta.id === id)

  return (
    <RecetasContext.Provider value={{ recetas, isLoading, getRecetaById }}>
      {children} {/* Renderizar los componentes hijos */}
    </RecetasContext.Provider>
  )
}

// Hook personalizado para usar el contexto de recetas
export function useRecetas() {
  return useContext(RecetasContext)
}
