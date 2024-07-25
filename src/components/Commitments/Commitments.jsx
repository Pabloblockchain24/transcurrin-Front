/*Import componenets*/
import CommitmentItem from "../CommitmentsItem/CommitmentItem"

function Commitments() {
    return (
        <>
            <section className='sectionContainer'>
                <h1 className='sectionTitle'>COMPROMISO CON NUESTROS CLIENTES</h1>
                <div className='sectionsArticles'>
                    <CommitmentItem title="TRANSPARENCIA" description="En todo momento podras conocer el estado de tu servicio a traves de nuestra intranet, tiempos de salida y llegada, operadores a cargo, tarifas, etc." img="../../../imgs/transparencia.jpg" />
                    <CommitmentItem title="RESPONSABILIDAD" description="En todo momento podras conocer el estado de tu servicio a traves de nuestra intranet, tiempos de salida y llegada, operadores a cargo, tarifas, etc." img="../../../imgs/responsabilidad.jpg" />
                    <CommitmentItem title="DISPONIBILIDAD" description="En todo momento podras conocer el estado de tu servicio a traves de nuestra intranet, tiempos de salida y llegada, operadores a cargo, tarifas, etc." img="../../../imgs/disponibilidad.jpg" />
                </div>
            </section>
            <hr className='LineHr' />
        </>
    )
}
export default Commitments