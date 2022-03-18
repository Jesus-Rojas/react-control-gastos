import { useState } from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import { generarId } from './helpers'
import Modal from './components/Modal'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  // hooks
  const [modal, setModal] = useState(false)
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidpresupuesto, setIsValidPresupuesto] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState([])

  // methods
  const handleNuevoGasto = () => { 
    setModal(true)
    setTimeout(() => {
      setAnimarModal(true)
    }, 350);
  }
  const guardarGasto = (gasto) => {
    gasto.id = generarId()
    gasto.fecha = Date.now()
    setGastos([...gastos, gasto])
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidpresupuesto={isValidpresupuesto}
        gastos={gastos}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      { isValidpresupuesto && (
        <>
          <main>
            <ListadoGastos 
              gastos={gastos}
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
          setModal={setModal}
        />
      )}
    </div>
  )
}

export default App
