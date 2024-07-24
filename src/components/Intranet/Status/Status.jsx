/*import styles*/
import "./Status.css"

/*import components */
import React, { useEffect } from 'react'
import { IntranetTable } from "../Table"

/*import context*/
import { useIntranet } from "../../../context/IntranetContext"

/*import utils*/
import { statusDelDia } from "../../../utils/calculationsSummary";
import { columnsStatusTable } from "../../../utils/columnsIntranetTables"

function Status() {
    const { getServices, services } = useIntranet()
    useEffect(() => {
        async function loadServices() {
            await getServices()
        }
        loadServices()
    }, [])

    const statusDia = statusDelDia(services)
    if (statusDia.length === 0) return (<div className='servicesNotFound'><h1> No hay unidades status para esta fecha.</h1></div>)

    return (
        <IntranetTable servicios={statusDia} columns={columnsStatusTable} />
    )
}

export default Status