import React from 'react'
import { formatearFecha, iconos } from '../helpers'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'

const Gasto = ({ gasto, setGastoEditar, deleteGasto }) => {
  const { categoria, nombre, cantidad, id, fecha } = gasto

  // methods
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction
        onClick={() => setGastoEditar(gasto)}
      >
        Editar
      </SwipeAction>
    </LeadingActions>
  ) 
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        onClick={handleDelete}
        destructive={true}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )
  const handleDelete = () => { 
    if (confirm()) {
      deleteGasto(id)
    }
  }

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className='gasto sombra'>
          <div className='contenido-gasto'>
              <img 
                src={iconos[categoria]}
                alt='Icono Gasto'
              />
            <div className='descripcion-gasto'>
              <p className='categoria'>{categoria}</p>
              <p className='nombre-gasto'>{nombre}</p>
              <p className='fecha-gasto'>
                Agregado el: {''}
                <span>{formatearFecha(fecha)}</span>
              </p>
            </div>
          </div>
          <p className='cantidad-gasto'>${cantidad}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto