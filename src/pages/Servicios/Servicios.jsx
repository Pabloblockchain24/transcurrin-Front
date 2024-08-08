/*import styles*/
import "./Servicios.css"

/*import components*/
import ServiciosItem from "../../components/ServiciosItem/ServiciosItem"

/*import dependencies*/
import { Helmet } from 'react-helmet-async';

function Servicios() {

    return (
        <>
            <Helmet>
                <title> Transcurrin || Servicios </title>
                <meta name="description" content="Retiros y entregas en puerto, almacenaje, consolidado y desconsolidado de carga, traslado de carga, devolución de vacios y tracking de carga." />
                <meta property="og:title" content=" Transcurrin || Servicios" />
                <meta property="og:description" content="Retiros y entregas en puerto, almacenaje, consolidado y desconsolidado de carga, traslado de carga, devolución de vacios y tracking de carga." />
            </Helmet>

            <main className='serviciosContainer'>
                <h1 className='serviciosTitle'>SERVICIOS</h1>
                <section className='serviciosSection'>
                    <ServiciosItem title="RETIROS Y ENTREGAS EN PUERTO" img="../../../imgs/servicios/serviciosRetiros.jpg" description="Servicio de retiro en puerto que incluye presentación en puerto, previa coordinación con agencias de aduana, retiro en puerto y traslado a depósito o a cliente" />
                    <ServiciosItem title="ALMACENAJE CTR Y CARGA" img="../../../imgs/servicios/serviciosAlmacenamiento.jpg" description="Servicio de almacenamiento de carga, en contenedor o desconsolidada, en patio o en bodega dependiendo de la naturaleza de la carga y los requerimientos del cliente" />
                    <ServiciosItem title="CONSOLIDADO y DESCONSOLIDADO" img="../../../imgs/servicios/serviciosDesconsolidado.jpeg" description="Servicio de desconsolidado de carga y su posterior carguío a rampla de camión, o traslado a zona de bodegas para ser almacenada hasta que cliente requiera el traslado a destino final." />
                    <ServiciosItem title="ENTREGAS EN CLIENTE" img="../../../imgs/servicios/serviciosEntregas.jpeg" description="Entregas en centros de distribución o puntos finales de venta de clientes, según indicación de cliente, hora de presentación indicada y tiempo de descarga estimada." />
                    <ServiciosItem title="DEVOLUCIóN DE VACÍOS" img="../../../imgs/servicios/serviciosVacios.jpg" description="Servicio de devolución de ctres vacios, ya sea retirándolos desde depósito del transporte dado que carga fue desconsolidada o posterior a la entrega en destino final, para cargas full" />
                    <ServiciosItem title="TRACKING Y DOCUMENTACIóN" img="../../../imgs/servicios/serviciosRespaldo.jpg" description="Cada servicio cuenta con respaldos que acredita el estado en el que se recibió la carga, estado en el que se entregó, guias de despacho timbradas, y cualquier otro que sea requerido." />
                </section>
            </main>
        </>
    )
}

export default Servicios