import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({ 
  gastos,
  setGastoEditar,
  deleteGasto,
  filtro,
  gastosFiltrados 
}) => {
  console.log(gastos)
  setTimeout(() => {
    console.log(gastos.lentgh)
  }, 3000);
  return (
    <div className='listado-gastos contenedor'>
      <h2>{ gastos.lentgh ? 'Gastos' : 'No Hay Gastos' }</h2>
      { filtro ? (
          <>
            {/* <h2>{ gastosFiltrados.lentgh ? 'Gastos' : 'No Hay Gastos' }</h2> */}
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
            {/* <h2>{ gastos.lentgh ? 'Gastos' : 'No Hay Gastos' }</h2> */}
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