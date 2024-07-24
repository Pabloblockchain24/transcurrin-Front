/*import styles*/
import "./VaciosTable.css"

/*import components */
import React, { useEffect } from 'react'
import { IntranetTable } from "../Table"

/*import context*/
import { useIntranet } from "../../../context/IntranetContext"

/*import utils*/
import { vaciosEnDepot } from "../../../utils/calculationsSummary";
import { columnsVaciosTable } from "../../../utils/columnsIntranetTables"

function VaciosTable() {
    const { getServices, services } = useIntranet()
    useEffect(() => {
        async function loadServices() {
            await getServices()
        }
        loadServices()
    }, [])

    const vaciosPendientes = vaciosEnDepot(services)
    if (vaciosPendientes.length === 0) return (<div className='servicesNotFound'><h1> Todas las unidades han sido devueltas a la fecha.</h1></div>)
    
    
        return (
            <IntranetTable servicios={vaciosPendientes} columns={columnsVaciosTable} />
        )
    
}

export default VaciosTable