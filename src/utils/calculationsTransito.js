export const llegoAPuerto = (fechaISO) => {
    const fechaEta = new Date(fechaISO);
    const fechaHoy = new Date()
    return fechaEta - fechaHoy
}

export const diasEnPuerto = (fechaISO) => {
    const fechaEta = new Date(fechaISO);
    const fechaHoy = new Date()
    const diferenciaMilisegundos = fechaHoy - fechaEta
    return (Math.ceil(diferenciaMilisegundos / (1000 * 60 * 60 * 24)))
}

export const diasEnDepot = (fechaISO) => {
    const fechaRetiro = new Date(fechaISO);
    const fechaHoy = new Date()
    const diferenciaMilisegundos = fechaHoy - fechaRetiro
    return (Math.ceil(diferenciaMilisegundos / (1000 * 60 * 60 * 24)))
}

export const demurrage = (fechaISO, diasLibres) =>{
    const fechaDemurrage = new Date(fechaISO);
    fechaDemurrage.setDate(fechaDemurrage.getDate() + diasLibres - 1)
    const dia = fechaDemurrage.getDate();
    const mes = fechaDemurrage.getMonth() +1 ;
    const año = fechaDemurrage.getFullYear();
    return `${dia}-${mes}-${año}`;
}

export const formatHoraEntrega = (fechaIso) => {
    const fechaEntrega = new Date(fechaIso);
    
    if (fechaEntrega.getFullYear() <= 2000) return "PENDIENTE";

    const dia = fechaEntrega.getDate();
    const mes = fechaEntrega.getMonth() +1 ;    
    const hora = fechaEntrega.getHours();
    const min = fechaEntrega.getMinutes();

    return `${dia}-${mes} ${hora}:${min}`;
}

export const horaEntregaEstimada = (fechaIso) => {
    const fechaEntrega = new Date(fechaIso);

    if (fechaEntrega.getFullYear() <= 2000) return "PENDIENTE";

    const dia = fechaEntrega.getDate();
    const mes = fechaEntrega.getMonth() +1 ;    
    const hora = fechaEntrega.getHours() + 2;
    const min = fechaEntrega.getMinutes();

    if (hora >= 14) {
        const dia = fechaEntrega.getDate() + 1 ;
        const hora = 8
        const min = 30
        return `${dia}-${mes} ${hora}:${min}`;
    }
    return `${dia}-${mes} ${hora}:${min}`;
}
