/*import components*/
import StaticItem from "../StaticsItem/StaticsItem";

function Statics() {
    return (
        <>
            <section className='sectionContainer'>
                <h1 className='sectionTitle'>2023 EN NÚMEROS</h1>
                <div className='sectionsArticles'>
                    <StaticItem title="SERVICIOS REALIZADOS" description="En todas sus modalidades, servicio de unidades full, desconsolidados, consolidados, etc." end={1500} />
                    <StaticItem title="CAMIONES EN NUESTRA FLOTA" description="Durante 2022 y a pesar de una baja considerable en el movimiento de carga respecto a 2021, mantuvimos una flota de +25 camiones disponibles para nuestros clientes" end={25} />
                    <StaticItem title="PUNTUALIDAD PRESENTACION" description="Logramos presentarnos al menos 15 minutos antes del horario de presentación, en más del 90% de nuestros servicios en 2023" end={90} />
                    <StaticItem title="AÑOS DE EXPERIENCIA" description="En 2023 cumplimos 36 años conectando el puerto de san antonio con las distintas empresas del pais" end={36} />
                </div>
            </section>
            <hr className='LineHr' /></>
    )
}

export default Statics