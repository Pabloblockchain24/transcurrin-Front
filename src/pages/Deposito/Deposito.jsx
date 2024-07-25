/*import styles*/
import "./Deposito.css";

/*import components*/
import DepositoItem from "../../components/DepositoItem/DepositoItem"

function Deposito() {
    return (
        <main className='depositoContainer'>
            <h1 className='depositoTitle'>DEPóSITO Y EQUIPOS</h1>
            <section className='depositoSection'>
                <DepositoItem title="DEPOSITO" img="../../../src/assets/images/deposito/deposito.jpg" description="Nuestro depósito de 10,000 m² ofrece amplio espacio para almacenamiento eficiente. El piso tiene tratamiento geomanico garantizando seguridad en las operaciones, además de contar con todas las medidas de seguridad pertinentes" />
                <DepositoItem title="GRUA PORTACONTENEDORES" img="../../../src/assets/images/deposito/portacontenedores.jpg" description="Grúa especializada en operaciones de movimiento de contenedores, diseñada para garantizar eficiencia yseguridad en la manipulación precisa de carga en contextos logísticos variados" />
                <DepositoItem title="GRUA HORQUILLA" img="../../../src/assets/images/deposito/horquillas.jpg" description="Nuestras grúas de horquillas, con capacidad para levantar hasta 3 toneladas, ofrecen versatilidad y eficiencia en la manipulación de carga, optimizando operaciones logísticas" />
                <DepositoItem title="GRUA VACÍOS" img="../../../src/assets/images/deposito/gruaVacios.jpg" description="Grúas para la manipulación de unidades vacias dedicadas unicamente a estas operaciones, optimizando los tiempos de estadia de los camiones en depósito" />
                <DepositoItem title="TRACTOCAMIONES" img="../../../src/assets/images/deposito/tractocamiones.jpg" description="Operamos una flota de tractocamiones en perfectas condiciones, con más de 20 unidades, garantizando eficiencia y confiabilidad en el cumplimiento de nuestros compromisos en tiempo y forma<" />
                <DepositoItem title="RAMPLAS PLANAS" img="../../../src/assets/images/deposito/rampaPlana.jpg" description="Ramplas planas que permiten tanto el traslado de carga suelta (palletizada) como de contenedores" />
                <DepositoItem title="CHASIS" img="../../../src/assets/images/deposito/chasis.jpg" description="Chasis que permiten un uso mas del tonelaje transportado en cada servicio, asi como la posibilidad de trasladar cargas reefer." />
                <DepositoItem title="CARPAS / ESLINGAS / GPS" img="../../../src/assets/images/deposito/carpas.jpg" description="Cada tractocamion cuenta con carpas y eslingas para asegurar la carga en caso que sea necesario, además de GPS." />
            </section>
        </main>
    )
}

export default Deposito