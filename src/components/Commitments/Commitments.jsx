/*Import componenets*/
import CommitmentItem from "../CommitmentItem/CommitmentItem";

function Commitments() {
    return (
        <>
            <section className='sectionContainer'>
                <h1 className='sectionTitle'>COMPROMISO CON NUESTROS CLIENTES</h1>
                <div className='sectionsArticles'>
                    <CommitmentItem title="TRANSPARENCIA" description="En todo momento podras conocer el estado de tu servicio a traves de nuestra intranet, tiempos de salida y llegada, operadores a cargo, tarifas, etc." img="src/assets/TRANSPARENCIA.jpg" />
                    <CommitmentItem title="RESPONSABILIDAD" description="En todo momento podras conocer el estado de tu servicio a traves de nuestra intranet, tiempos de salida y llegada, operadores a cargo, tarifas, etc." img="src/assets/RESPONSABILIDAD.jpg" />
                    <CommitmentItem title="DISPONIBILIDAD" description="En todo momento podras conocer el estado de tu servicio a traves de nuestra intranet, tiempos de salida y llegada, operadores a cargo, tarifas, etc." img="src/assets/DISPONIBIIDAD.jpg" />
                </div>
            </section>
            <hr className='LineHr' />
        </>
    )
}
export default Commitments