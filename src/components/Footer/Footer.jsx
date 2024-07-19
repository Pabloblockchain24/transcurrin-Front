/*import styles*/
import "./Footer.css";

/*import dependencies*/
import React from "react";
import { NavLink } from 'react-router-dom'

/*import images*/
import logoFooter from "../../assets/logoFooter.png"

function Footer() {
  return (
    <footer className="footerContainer">

      <section className="footerIzq">
        <img src={logoFooter} alt="Logo Transcurrin" />
      </section>

      <section className="footerCentro">
        <article className="footerCentroArticle">
          <h2 className="footerItemTitle">CONTACTO</h2>
          <p className="footerItemDescription"> +569 5072 7028</p>
        </article>
        <article className="footerCentroArticle">
          <h2 className="footerItemTitle">DEPOSITO Y OPERACIONES</h2>
          <p className="footerItemDescription">LAS ACACIAS 315 AGUAS BUENAS , SAN ANTONIO</p>
        </article>
        <article className="footerCentroArticle">
          <h2 className="footerItemTitle">OFICINA COMERCIAL </h2>
          <p className="footerItemDescription">BLANCO ENCALADA #750, SAN ANTONIO</p>
        </article>
        <hr className="footerCentroLine" />
        <div className="footerCentroBottom">©transcurrin.cl All rigths reserved</div>
      </section>

      <section className="footerDer">
        <article>
          <h2 className="footerItemTitle">MAIL CONTACTO</h2>
          <p className="footerItemDescription"> parce@transcurrin.cl</p>
          <p className="footerItemDescription"> contacto@transcurrin.cl</p>
        </article>

        <article className="footerDerButton">
          <NavLink to={"/Contacto"} className="footerDerButtonLink"> OBTEN TU COTIZACIÓN HOY </NavLink>
        </article>
        <p className="footerDerButtonText"> ¡ Solo válido para días hábiles !</p>
      </section>

    </footer>
  );
}

export default Footer;
