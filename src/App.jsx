import { useState, useEffect } from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import { generarId } from './helpers'
import Modal from './components/Modal'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Filtros from './components/Filtros'

function App() {
  // hooks
  const [modal, setModal] = useState(false)
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  )
  const [isValidpresupuesto, setIsValidPresupuesto] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  )
  const [gastoEditar, setGastoEditar] = useState({})
  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([])

  // methods
  const handleNuevoGasto = () => { 
    openModal(true)
    setGastoEditar({})
  }
  const guardarGasto = (gasto) => {
    if (gasto.id) {
      const gastosUpdate = gastos.map( data => data.id === gasto.id ? gasto : data)
      setGastos(gastosUpdate)
    } else {
      gasto.fecha = Date.now()
      gasto.id = generarId()
      setGastos([...gastos, gasto])
    }
    openModal(false)
  }
  const openModal = (condicion) => { 
    setModal(condicion)
    setTimeout(() => {
      setAnimarModal(condicion)
    }, 350);
  }
  const deleteGasto = (id) => { 
    const filtroGastos = gastos.filter( data => data.id !== id)
    setGastos(filtroGastos)
  }

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      openModal(true)
    }
  }, [gastoEditar])

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto)
  }, [presupuesto])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos))
  }, [gastos])

  useEffect(() => {
    const gastosFiltro = gastos.filter( data => data.categoria === filtro)
    setGastosFiltrados(gastosFiltro)
  }, [filtro])

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;
    if (presupuestoLS > 0) {
      setIsValidPresupuesto(true)
    }
  }, [])

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidpresupuesto={isValidpresupuesto}
        gastos={gastos}
        setIsValidPresupuesto={setIsValidPresupuesto}
        setGastos={setGastos}
      />
      { isValidpresupuesto && (
        <>
          <main>
            <Filtros
              filtro={filtro}
              setFiltro={setFiltro}
            />
            <ListadoGastos 
              gastos={gastos}
              deleteGasto={deleteGasto}
              setGastoEditar={setGastoEditar}
              gastosFiltrados={gastosFiltrados}
              filtro={filtro}
            />
          </main>
          <div className="nuevo-gasto">
            <img 
              src={IconoNuevoGasto} 
              alt="Icono Nuevo Gasto" 
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}
      { modal && (
        <Modal 
          guardarGasto={guardarGasto}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          gastoEditar={gastoEditar}
          setModal={setModal}
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  )
}

export default App
