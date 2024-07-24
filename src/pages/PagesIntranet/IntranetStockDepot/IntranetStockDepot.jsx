/*import styles*/
import "./IntranetStockDepot.css";

/*import components*/
import NavBarIntranet from "../../../components/Intranet/NavbarIntranet/NavBarIntranet";
import StockDepotTable from '../../../components/Intranet/StockDepotTable/StockDepotTable';

/*import utils*/
import { formatFecha } from "../../../utils/formatFechas"

function IntranetStockDepot() {

  return (
    <>
      <NavBarIntranet />
      <main className='intranetPageContainer'>
        <div className='intranetPageTitle'> UNIDADES EN DEPóSITO AL {formatFecha(new Date())} </div>
      </main>
      <StockDepotTable />
    </>

  )
}

export default IntranetStockDepot