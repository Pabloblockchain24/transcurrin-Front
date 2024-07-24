import { llegoAPuerto, diasEnPuerto } from "../utils/calculationsTransito"
import { formatFecha } from "../utils/formatFechas"
export const serviciosEnTransito = (services) => {
    const serviciosTransito = services.filter(servicio => {
        let aux = llegoAPuerto(servicio.eta)
        if (aux > 1) {
            return servicio
        }
    })
    return serviciosTransito
}
export const serviciosEnDepot = (services) => {
    const serviciosDeposito = services.filter(servicio => {
        return servicio.retiroPuerto !== null && servicio.entrega === null;
    })
    return serviciosDeposito
}

export const serviciosEnPuerto = (services) => {
    const serviciosPuerto = services.filter(servicio => {
        return servicio.retiroPuerto === null && llegoAPuerto(servicio.eta) < 0
    })
    return serviciosPuerto
}

export const vaciosEnDepot = (services) => {
    const vaciosDepot = services.filter(servicio => {
        return servicio.retiroPuerto !== null && diasEnPuerto(servicio.eta) > 0 && servicio.fechaVacio === null
    })
    return vaciosDepot
}

export const serviciosPendientesFacturacion = (services) => {
    const serviciosFacturacion = services.filter(servicio => {
        return servicio.retiroPuerto !== null && diasEnPuerto(servicio.eta) > 0 && servicio.fechaVacio !== null && servicio.entrega !== null
    });
    return serviciosFacturacion
}

export const serviciosProgramados = (services) => {
    const serviciosConProgramacion = services.filter(servicio => {
        return servicio.progEntrega !== null && servicio.entrega === null
    });
    return serviciosConProgramacion
}

export const statusDelDia = (services) => {

    const statusDia = services.filter(servicio => {
        return formatFecha(servicio.progEntrega) == formatFecha(new Date())
    })
    return statusDia
}

