import React from 'react'
import { List, ListItem, ListItemText } from '@mui/material'

export default function IngredientesList({ ingredientes }) {
  return (
    <List>
      {ingredientes.map((ing, idx) => (
        <ListItem key={idx} disablePadding>
          <ListItemText primary={`${ing.cantidad} ${ing.unidad} - ${ing.nombre}`} />
        </ListItem>
      ))}
    </List>
  )
}
