/*import styles*/
import "./FacturacionTable.css"

/*import components */
import React, { useEffect } from 'react'
import { IntranetTable } from "../Table"

/*import context*/
import { useIntranet } from "../../../context/IntranetContext"

/*import utils*/
import { serviciosPendientesFacturacion } from "../../../utils/calculationsSummary";
import { columnsFacturacionTable } from "../../../utils/columnsIntranetTables"


function FacturacionTable() {
    const { getServices, services } = useIntranet()
    useEffect(() => {
        async function loadServices() {
            await getServices()
        }
        loadServices()
    }, [])

    const serviciosFacturacion = serviciosPendientesFacturacion(services)

    console.log(serviciosFacturacion)
    if (serviciosFacturacion.length === 0) return (<div className='servicesNotFound'><h1> No hay unidades pendiente de facturación a la fecha.</h1></div>)

    return (
        <IntranetTable servicios={serviciosFacturacion} columns={columnsFacturacionTable} />
    )

}

export default FacturacionTable