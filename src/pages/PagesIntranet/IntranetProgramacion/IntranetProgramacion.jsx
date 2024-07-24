/*import styles*/
import "./IntranetProgramacion.css"

/*import components*/
import NavBarIntranet from "../../../components/Intranet/NavbarIntranet/NavBarIntranet";
import Programacion from '../../../components/Intranet/Programacion/Programacion';

/*import utils*/
import { formatFecha, getHour } from "../../../utils/formatFechas"

function IntranetProgramacion() {

  const diaAMostrar = new Date()
  if (getHour() > 16) {
    diaAMostrar.setDate(diaAMostrar.getDate() + 1)
  }

  return (
    <>
      <NavBarIntranet />
      <main className='intranetPageContainer'>
        <div className='intranetPageTitle'> PROGRAMACIÓN {formatFecha(diaAMostrar)} </div>
        <p className='intranetPageSubtitle'> A partir de las 16:00 se mostrará la programación del dia siguiente.</p>

      </main>
      <Programacion />
    </>
  )
}

export default IntranetProgramacion