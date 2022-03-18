import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({
  presupuesto, 
  setPresupuesto, 
  isValidpresupuesto, 
  setIsValidPresupuesto, 
  gastos,
  setGastos
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      { isValidpresupuesto ? (
        <ControlPresupuesto
          setGastos={setGastos}
          setPresupuesto={setPresupuesto}
          presupuesto={presupuesto}
          gastos={gastos}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      ) : (
        <NuevoPresupuesto 
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )
    }
    </header>
  )
}

export default Header