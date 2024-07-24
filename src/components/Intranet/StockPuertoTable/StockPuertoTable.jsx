/*import styles*/
import "./StockPuertoTable.css"

/*import components */
import React, { useEffect } from "react";
import { IntranetTable } from "../Table"

/*import context*/
import { useIntranet } from "../../../context/IntranetContext"

/*import utils*/
import { serviciosEnPuerto } from "../../../utils/calculationsSummary";
import { columnsPuertoTable } from "../../../utils/columnsIntranetTables"


function StockPuertoTable() {
    const { getServices, services } = useIntranet()
    useEffect(() => {
        async function loadServices() {
            await getServices()
        }
        loadServices()
    }, [])

    const serviciosPuerto = serviciosEnPuerto(services)
    
    if (serviciosPuerto.length === 0) return (<div className='servicesNotFound'><h1> No hay unidades en puerto a la fecha.</h1></div>)

    return (
        <IntranetTable servicios={serviciosPuerto} columns={columnsPuertoTable}/>
    )
}

export default StockPuertoTable