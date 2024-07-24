/*import styles*/
import "./IntranetVacios.css"

/*import components*/
import NavBarIntranet from "../../../components/Intranet/NavbarIntranet/NavBarIntranet";
import VaciosTable from '../../../components/Intranet/VaciosTable/VaciosTable';

/*import utils*/
import { formatFecha } from "../../../utils/formatFechas"
function IntranetVacios() {

  return (
    <>
      <NavBarIntranet />
      <main className='intranetPageContainer'>
        <div className='intranetPageTitle'> DEVOLUCIÓN VACIOS AL: {formatFecha(new Date())}</div>
        <p className='intranetPageSubtitle'> Los servicios abajo mostrados, corresponden a todos aquellas unidades que ingresaron a depósito y aún no han sido facturadas.</p>
      </main>
      <VaciosTable />
    </>

  )
}

export default IntranetVacios