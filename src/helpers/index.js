// iconos
import ahorro from '../img/icono_ahorro.svg'
import casa from '../img/icono_casa.svg'
import comida from '../img/icono_comida.svg'
import gastos from '../img/icono_gastos.svg'
import ocio from '../img/icono_ocio.svg'
import salud from '../img/icono_salud.svg'
import suscripciones from '../img/icono_suscripciones.svg'

const iconos = {
  ahorro,
  casa,
  comida,
  gastos,
  ocio,
  salud,
  suscripciones,
}

const generarId = () => { 
  const random = Math.random().toString(36).substring(2)
  const fecha = Date.now().toString(36)
  return random + fecha
}

const formatearFecha = (fecha) => { 
  const fechaNueva = new Date(fecha)
  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }
  return fechaNueva.toLocaleDateString('es-ES', options)
}

export {
  generarId,
  formatearFecha,
  iconos,
}