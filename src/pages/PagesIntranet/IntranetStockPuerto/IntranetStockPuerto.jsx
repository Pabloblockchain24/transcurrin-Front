/*import styles*/
import "./IntranetStockPuerto.css";

/*import components*/
import NavBarIntranet from "../../../components/Intranet/NavbarIntranet/NavBarIntranet";
import StockPuertoTable from '../../../components/Intranet/StockPuertoTable/StockPuertoTable';

/*import utils*/
import { formatFecha } from "../../../utils/formatFechas"
function IntranetStockPuerto() {

  return (
    <>
      <NavBarIntranet />
      <main className='intranetPageContainer'>
        <div className='intranetPageTitle'> UNIDADES EN PUERTO AL {formatFecha(new Date())}</div>
      </main>
      <StockPuertoTable />
    </>
  )
}

export default IntranetStockPuerto