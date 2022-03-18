import { useState, useEffect } from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  gastoEditar,
  setGastoEditar
}) => {
  // hooks
  const [nombre, setNombre] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [categoria, setCategoria] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [id, setId] = useState('')
  const [fecha, setFecha] = useState('')

  // methods
  const ocultarModal = () => {
    setGastoEditar({})
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 350);
  }
  const handleSubmit = (e) => { 
    e.preventDefault()
    if([nombre, categoria, cantidad].includes('')){
      setMensaje('Todos los campos son obligatorios')
      setTimeout(() => {
        setMensaje('')
      }, 3000);
      return
    }
    const datos = {
      nombre, 
      cantidad, 
      categoria,
      fecha,
      id
    }
    guardarGasto(datos)
    ocultarModal()
  }

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
      setId(gastoEditar.id)
      setFecha(gastoEditar.fecha)
    }
  }, [])
  

  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img 
          src={CerrarBtn} 
          alt='Cerrar Modal' 
          onClick={ocultarModal}
        />
      </div>
      <form 
        className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
        onSubmit={handleSubmit}
      >
        <legend>{ gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto' }</legend>
        { mensaje && (
          <Mensaje tipo='error'>{mensaje}</Mensaje>
        )}
        <div className='campo'>
          <label htmlFor='nombre'></label>
          <input 
            type='text' 
            id='nombre'
            value={nombre}
            onChange={ e => setNombre(e.target.value)}
            placeholder='Añade El Nombre Del Gasto'
          />
        </div>
        <div className='campo'>
          <label htmlFor='cantidad'></label>
          <input 
            type='number' 
            id='cantidad'
            value={cantidad}
            onChange={ e => setCantidad(Number(e.target.value))}
            placeholder='Añade La Cantidad Del Gasto: ej. 300'
          />
        </div>
        <div className='campo'>
          <label htmlFor='categoria'></label>
          <select
            id='categoria'
            value={categoria}
            onChange={ e => setCategoria(e.target.value)}
          >
            <option value=''>-- Selecione --</option>
            <option value='ahorro'>Ahorro</option>
            <option value='comida'>Comida</option>
            <option value='casa'>Casa</option>
            <option value='gastos'>Gastos Varios</option>
            <option value='ocio'>Ocio</option>
            <option value='salud'>Salud</option>
            <option value='suscripciones'>Suscripciones</option>
          </select>
        </div>
        <input 
          type='submit' 
          value={ gastoEditar.nombre ? 'Guardar Cambios'  : 'Añadir Gasto' }
        />
      </form>
    </div>
  )
}

export default Modal