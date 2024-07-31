/* import styles*/
import "./ServiciosItem.css"

/*import dependencies*/
import { NavLink } from 'react-router-dom'

function ServiciosItem({ title, img, description }) {
    return (
        <article className="serviciosArticle">
            <img src={img} alt={title} className="serviciosImg" />
            <div className="serviciosArticleText">
                <h2 className='serviciosArticleTitle'>{title}</h2>
                <p className='serviciosArticleDescription'> {description}</p>
                <NavLink to={"/Contacto"} className="serviciosArticleButton"> COTIZAR </NavLink>
            </div>

        </article>
    )
}

export default ServiciosItem