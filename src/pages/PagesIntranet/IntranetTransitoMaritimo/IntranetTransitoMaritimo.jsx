/*import styles*/
import "./IntranetTransitoMaritimo.css"

/*import components*/
import NavBarIntranet from "../../../components/Intranet/NavbarIntranet/NavBarIntranet";
import TransitoMaritimo from '../../../components/Intranet/TransitoMaritimo/TransitoMaritimo';

/*import utils*/
import { formatFecha } from "../../../utils/formatFechas"
function IntranetTransitoMaritimo() {

  return (
    <>
      <NavBarIntranet />
      <main className='intranetPageContainer'>
        <div className='intranetPageTitle'> UNIDADES EN TRÁNSITO MARÍTIMO AL {formatFecha(new Date())}</div>
      </main>
      <TransitoMaritimo />
    </>
  )
}

export default IntranetTransitoMaritimo