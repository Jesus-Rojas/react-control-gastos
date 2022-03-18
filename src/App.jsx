import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  // hooks
  const [modal, setModal] = useState(false)
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidpresupuesto, setIsValidPresupuesto] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  // methods
  const handleNuevoGasto = () => { 
    setModal(true)
    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  }

  return (
    <div>
      <Header 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidpresupuesto={isValidpresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      { isValidpresupuesto && (
        <div className="nuevo-gasto">
          <img 
            src={IconoNuevoGasto} 
            alt="Icono Nuevo Gasto" 
            onClick={handleNuevoGasto}
          />
        </div>
      )}
      { modal && (
        <Modal 
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          setModal={setModal}
        />
      )}
    </div>
  )
}

export default App
