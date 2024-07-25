/*import styles*/
import "./Servicios.css"

/*import components*/
import ServiciosItem from "../../components/ServiciosItem/ServiciosItem"

function Servicios() {
    return (
        <main className='serviciosContainer'>
            <h1 className='serviciosTitle'>SERVICIOS</h1>
            <section className='serviciosSection'>
                <ServiciosItem title="RETIROS Y ENTREGAS EN PUERTO" img="../../../src/assets/images/servicios/serviciosRetiros.jpg" description="Servicio de retiro en puerto que incluye presentación en puerto, previa coordinación con agencias de aduana, retiro en puerto y traslado a deposito o a cliente" />
                <ServiciosItem title="ALMACENAJE CTR Y CARGA" img="../../../src/assets/images/servicios/serviciosAlmacenamiento.jpg" description="Servicio de almacenamiento de carga, en contenedor o desconsolidada, en patio o en bodega dependiendo de la naturaleza de la carga y los requerimientos del cliente" />
                <ServiciosItem title="CONSOLIDADO y DESCONSOLIDADO" img="../../../src/assets/images/servicios/serviciosDesconsolidado.jpeg" description="Servicio de desconsolidado de carga y su posterior carguio a rampla de camion, o traslado a zona de bodegas para ser almacenada hasta que cliente requiera el traslado a destino final." />
                <ServiciosItem title="ENTREGAS EN CLIENTE" img="../../../src/assets/images/servicios/serviciosEntregas.jpeg" description="Entregas en centros de distribucion o tiendas finales de clientes, según indicacion de cliente, hora de presentación indicada y tiempo de descarga estimada." />
                <ServiciosItem title="DEVOLUCION DE VACIOS" img="../../../src/assets/images/servicios/serviciosVacios.jpg" description="Servicio de devolución de ctres vacios, ya sea retirandolos desde deposito del transporte dado que carga fue desconsolidada o posterior a la entrega en destino  final, para cargas full" />
                <ServiciosItem title="TRACKING Y DOCUMENTACION" img="../../../src/assets/images/servicios/serviciosRespaldo.jpg" description="Cada servicio  cuenta con respaldos que acredita el estado en el que se recibio la carga, estado en el que se entrego, guias de despacho timbradas, y cualquier otro que sea requerido." />
            </section>
        </main>
    )
}

export default Servicios