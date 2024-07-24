/*import components*/
import NavBarIntranet from "../../../components/Intranet/NavbarIntranet/NavBarIntranet";
import FacturacionTable from '../../../components/Intranet/FacturacionTable/FacturacionTable';

/*import utils*/
import { formatFecha } from "../../../utils/formatFechas"

function IntranetFacturacion() {

  return (
    <>
      <NavBarIntranet />
      <main className='intranetPageContainer'>
        <div className='intranetPageTitle'> SERVICIOS PENDIENTES DE FACTURACIÓN AL {formatFecha(new Date())} </div>
      </main>
      <FacturacionTable />
    </>
  )
}

export default IntranetFacturacion