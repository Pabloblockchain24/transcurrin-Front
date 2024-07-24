/*import styles*/
import "./Programacion.css"

/*import components */
import React, { useEffect } from 'react'
import { IntranetTable } from "../Table"

/*import context*/
import { useIntranet } from "../../../context/IntranetContext"

/*import utils*/
import { serviciosProgramados } from "../../../utils/calculationsSummary";
import { columnsProgramadosTable } from "../../../utils/columnsIntranetTables"

function Programacion() {

    const { getServices, services } = useIntranet()
    useEffect(() => {
        async function loadServices() {
            await getServices()
        }
        loadServices()
    }, [])

    const serviciosProgamacion = serviciosProgramados(services)

    if (serviciosProgamacion.length === 0) return (<div className='servicesNotFound'><h1> No hay unidades programadas para esta fecha.</h1></div>)

        
        return (
            <IntranetTable servicios={serviciosProgamacion} columns={columnsProgramadosTable} />
        )
}

export default Programacion