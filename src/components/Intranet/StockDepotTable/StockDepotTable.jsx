/*import styles*/
import "./StockDepotTable.css"

/*import components */
import React, { useEffect } from 'react'
import { IntranetTable } from "../Table"

/*import context*/
import { useIntranet } from "../../../context/IntranetContext"

/*import utils*/
import { serviciosEnDepot } from "../../../utils/calculationsSummary";
import { columnsDepotTable } from "../../../utils/columnsIntranetTables"

function StockDepotTable() {
    const { getServices, services } = useIntranet()
    useEffect(() => {
        async function loadServices() {
            await getServices()
        }
        loadServices()
    }, [])

    const serviciosDepot = serviciosEnDepot(services)

    if (serviciosDepot.length === 0) return (<div className='servicesNotFound'><h1> No hay unidades en depósito a la fecha.</h1></div>)
    
    return (
        <IntranetTable servicios={serviciosDepot} columns={columnsDepotTable} />
    )
}

export default StockDepotTable