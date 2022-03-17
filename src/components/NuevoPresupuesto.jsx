import { useState } from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValidPresupuesto }) => {
  // hooks
  const [mensaje, setMensaje] = useState('')

  // methods
  const handlePresupuesto = (e) => { 
    e.preventDefault()
    if (!presupuesto || presupuesto < 0) {
      setMensaje('No es un presupesto valido')
      return
    }
    setMensaje('')
    setIsValidPresupuesto(true)
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
    <form className='formulario' onSubmit={handlePresupuesto}>
      <div className='campo'>
        <label>Definir Presupuesto</label>
        <input 
          type="number" 
          className='nuevo-presupuesto'
          value={presupuesto}
          placeholder='Añade tu Presupuesto'
          onChange={ e => setPresupuesto(Number(e.target.value))}
        />
      </div>
      <input type="submit" value="Añadir" />
      { mensaje && (
        <Mensaje
          tipo='error'
        >
          {mensaje}
        </Mensaje>
      )}
    </form>
  </div>
  )
}

export default NuevoPresupuesto