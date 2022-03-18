import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({ gastos, setGastoEditar, deleteGasto }) => {
  return (
    <div className='listado-gastos contenedor'>
      <h2>{ gastos ? 'Gastos' : 'No Hay Gastos' }</h2>
      { gastos.map(gasto => (
        <Gasto 
          key={gasto.id}
          gasto={gasto}
          setGastoEditar={setGastoEditar}
          deleteGasto={deleteGasto}
        />
      ))}
    </div>
  )
}

export default ListadoGastos