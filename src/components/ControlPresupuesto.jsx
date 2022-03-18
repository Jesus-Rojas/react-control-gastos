import { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlPresupuesto = ({
  gastos,
  presupuesto,
  setPresupuesto,
  setGastos,
  setIsValidPresupuesto
}) => {
  // hooks
  const [porcentaje, setPorcentaje] = useState(0)
  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)

  // methods
  const formatearCantidad = (cantidad) => { 
    return cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }
  const handleResetApp = () => { 
    if (confirm('¿Deseas reiniciar presupuesto y gastos?')) {
      setPresupuesto(0)
      setGastos([])
      setIsValidPresupuesto(false)
    }
  }

  useEffect(() => {
    const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0 )
    const totalDisponible = presupuesto - totalGastado
    const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto ) * 100).toFixed(2);
    
    setGastado(totalGastado)
    setDisponible(totalDisponible)

    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje)
    }, 1500);
  }, [gastos])
  

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: porcentaje > 100 ? '#DC2626' :'#3B82F6',
            textColor: porcentaje > 100 ? '#DC2626' :'#3B82F6',
            trailColor: '#F5F5F5'
          })}
          value={porcentaje}
          text={porcentaje+'% Gastado'}
        />
      </div>
      <div className='contenido-presupuesto'>
        <button
          type='button'
          className='reset-app'
          onClick={handleResetApp}
        >
          Restear App
        </button>
        <p>
          <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
        </p>
        <p className={disponible < 0 ? 'negativo' : ''}>
          <span>Disponible: </span> {formatearCantidad(disponible)}
        </p>
        <p>
          <span>Gastado: </span> {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  )
}

export default ControlPresupuesto