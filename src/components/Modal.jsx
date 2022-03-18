import CerrarBtn from '../img/cerrar.svg'

const Modal = ({ setModal, animarModal, setAnimarModal }) => {
  // methods
  const ocultarModal = () => { 
    setAnimarModal(false)
    setTimeout(() => {
      setModal(true)
    }, 500);
  }
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img 
          src={CerrarBtn} 
          alt="Cerrar Modal" 
          onClick={ocultarModal}
        />
      </div>
      <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
        <legend>Nuevo Gasto</legend>
        <div className="campo">
          <label htmlFor="nombre"></label>
          <input 
            type="text" 
            id="nombre"
            placeholder='Añade El Nombre Del Gasto'
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad"></label>
          <input 
            type="number" 
            id="cantidad"
            placeholder='Añade La Cantidad Del Gasto: ej. 300'
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria"></label>
          <select
            id="categoria"
          >
            <option value="">-- Selecione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
        <input 
          type="submit" 
          value="Añadir Gasto" 
        />
      </form>
    </div>
  )
}

export default Modal