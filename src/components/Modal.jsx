import CerrarBtn from '../img/cerrar.svg'

const Modal = ({ setModal }) => {
  // methods
  const ocultarModal = () => { 
    setModal(false)
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
    </div>
  )
}

export default Modal