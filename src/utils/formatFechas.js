export const formatFechaMan = (fechaISO) => {
    const fecha = new Date(fechaISO);
    fecha.setDate(fecha.getDate() + 1);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();
    return `${dia}-${mes}-${año}`;
};

export const formatFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();
    return `${dia}-${mes}-${año}`;
};

export const getHour = () => {
    const hoy = new Date()
    const hora = hoy.getHours()
    return hora
}