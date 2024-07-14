/*Import styles*/
import "./Map.css"

function Map() {
    /*Map URL*/
    const mapURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6648.896407065845!2d-71.56854969521515!3d-33.567717428254156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662475ce1f7c805%3A0x8e55b0b74dd1bcfa!2sFuenzalida%20Almacen%20de%20Contenedores%20Ltda!5e0!3m2!1ses!2scl!4v1702121617751!5m2!1ses!2scl";

    return (
        <section className='sectionContainer'>
            <h1 className='sectionTitle'>DONDE ESTAMOS</h1>
            <iframe
                title="Google Maps"
                width="200"
                height="500"
                src={mapURL}
                style={{ border: 2 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className='MapCustom'
            ></iframe>
        </section>
    )
}

export default Map