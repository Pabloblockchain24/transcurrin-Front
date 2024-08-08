/*import styles*/
import "./BannerItem.css";

/*import depedencies*/
import { NavLink } from "react-router-dom"

function BannerItem({ title, subtitle, img }) {

    return (
        <article className='BannerContainer' style={{ backgroundImage: `url(${img})` }}>
            <div className='BannerText'>
                <h1 className='BannerTitle' >{title}</h1>
                <h2 className='BannerSubtitle'> {subtitle}</h2>
                <NavLink to="/contacto" className="BannerButton"> CONTÁCTANOS AQUÍ </NavLink>
            </div>
        </article>
    )
}

export default BannerItem;
