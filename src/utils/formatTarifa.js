export const formatTarifa = (tarifa) => {
    if (tarifa !== null && tarifa !== undefined) {
        return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 }).format(tarifa);
    }
    return tarifa;
};