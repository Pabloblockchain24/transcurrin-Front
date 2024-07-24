/*import styles*/
import "./SummaryTable.css"

/*import dependencies*/
import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom"

/*import context*/
import { useIntranet } from "../../../context/IntranetContext"

/*import utils*/
import { formatFechaMan } from "../../../utils/formatFechas"
import { serviciosEnTransito, serviciosEnDepot, serviciosEnPuerto, vaciosEnDepot, serviciosPendientesFacturacion, serviciosProgramados } from "../../../utils/calculationsSummary"

function SummaryTable() {
    /*services charge*/
    const { getServices, services } = useIntranet()
    useEffect(() => {
        async function loadServices() {
            await getServices()
        }
        loadServices()
    }, [])

    /*Summary calculations through utils*/
    const transitoMaritimo = serviciosEnTransito(services)
    const serviciosPuerto = serviciosEnPuerto(services)
    const serviciosDepot = serviciosEnDepot(services)
    const vaciosDepot = vaciosEnDepot(services)
    const serviciosFacturacion = serviciosPendientesFacturacion(services)
    const programados = serviciosProgramados(services)

    return (
        <table className='table summaryTableContainer'>
            <tbody className='tableBody'>
                <tr>
                    <td>Transito maritimo [uds]</td>
                    <td>{transitoMaritimo.length}</td>
                    <td>
                        <NavLink to={"/intranet/transitoMaritimo"} className="tableButton">REVISAR</NavLink>
                    </td>
                </tr>
                <tr>
                    <td>Stock en puerto [uds]</td>
                    <td>{serviciosPuerto.length}</td>
                    <td>
                        <NavLink to={"/intranet/stockPuerto"} className="tableButton">REVISAR</NavLink>
                    </td>
                </tr>
                <tr>
                    <td>Stock en deposito [uds]</td>
                    <td>{serviciosDepot.length}</td>
                    <td>
                        <NavLink to={"/intranet/stock"} className="tableButton">REVISAR</NavLink>
                    </td>
                </tr>
                <tr>
                    <td>Devoluciones pendientes [uds] </td>
                    <td>{vaciosDepot.length}</td>
                    <td>
                        <NavLink to={"/intranet/vacios"} className="tableButton">REVISAR</NavLink>
                    </td>
                </tr>
                <tr>
                    <td>Facturación pendiente [uds]</td>
                    <td>{serviciosFacturacion.length}</td>
                    <td>
                        <NavLink to={"/intranet/facturacion"} className="tableButton">REVISAR</NavLink>
                    </td>
                </tr>
                <tr>
                    <td>Programación {formatFechaMan(new Date())}</td>
                    <td>{programados.length > 0 ? "OK" : "PENDIENTE"}</td>
                    <td>
                        <NavLink to={"/intranet/programacion"} className="tableButton">REVISAR</NavLink>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default SummaryTable