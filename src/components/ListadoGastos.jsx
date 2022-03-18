import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({ 
  gastos,
  setGastoEditar,
  deleteGasto,
  filtro,
  gastosFiltrados 
}) => {
  return (
    <div className='listado-gastos contenedor'>
      { filtro ? (
          <>
            <h2>{ gastosFiltrados.lentgh ? 'Gastos' : 'No Hay Gastos' }</h2>
            { gastosFiltrados.map(gasto => (
              <Gasto 
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                deleteGasto={deleteGasto}
              />
            ))}
          </>
        ) : (
          <>
            <h2>{ gastos.lentgh ? 'Gastos' : 'No Hay Gastos' }</h2>
            { gastos.map(gasto => (
              <Gasto 
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                deleteGasto={deleteGasto}
              />
            ))}
          </>
        )}
    </div>
  )
}

export default ListadoGastos