/*Import styles*/
import "./Home.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/*Import dependencies*/
import React from 'react';
import Slider from 'react-slick';

/*Import components*/
import BannerItem from "../../components/BannerItem/BannerItem"
import StaticItem from "../../components/StaticsItem/StaticsItem";
import CommitmentItem from "../../components/CommitmentItem/CommitmentItem";
function Home() {

  /*Slider settings*/
  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  }
  /*Map URL*/
  const mapURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6648.896407065845!2d-71.56854969521515!3d-33.567717428254156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662475ce1f7c805%3A0x8e55b0b74dd1bcfa!2sFuenzalida%20Almacen%20de%20Contenedores%20Ltda!5e0!3m2!1ses!2scl!4v1702121617751!5m2!1ses!2scl";

  return (
    <main className="HomeContainer">
      {/* Section 1: Banner */}
      <section >
        <Slider {...settings}>
          <BannerItem title="SOLUCIONES LOGISTICAS A TU MEDIDA" subtitle="Nos adaptamos a tus necesidades" img="src/assets/banners/banner1.jpg" />
          <BannerItem title="EXPERIENCIA A TU SERVICIO" subtitle="35 años de operación nos respaldan" img="src/assets/banners/banner2.jpg" />
          <BannerItem title="CENTRATE EN TU NEGOCIO PRINCIPAL" subtitle="Despreocupate de la logistica de tu carga" img="src/assets/banners/banner3.jpg" />
        </Slider>
      </section>
      <hr className='LineHr' />

      {/* Section 2: Statistics */}
      <section className='sectionContainer'>
        <h1 className='sectionTitle'>2023 EN NÚMEROS</h1>
        <div className='sectionsArticles'>
          <StaticItem title="SERVICIOS REALIZADOS" description="En todas sus modalidades, servicio de unidades full, desconsolidados, consolidados, etc." end={1500} />
          <StaticItem title="CAMIONES EN NUESTRA FLOTA" description="Durante 2022 y a pesar de una baja considerable en el movimiento de carga respecto a 2021, mantuvimos una flota de +25 camiones disponibles para nuestros clientes" end={25} />
          <StaticItem title="PUNTUALIDAD PRESENTACION" description="Logramos presentarnos al menos 15 minutos antes del horario de presentación, en más del 90% de nuestros servicios en 2023" end={90} />
          <StaticItem title="AÑOS DE EXPERIENCIA" description="En 2023 cumplimos 36 años conectando el puerto de san antonio con las distintas empresas del pais" end={36} />
        </div>
      </section>
      <hr className='LineHr' />


      {/* Section 3: Commitment */}
      <section className='sectionContainer'>
        <h1 className='sectionTitle'>COMPROMISO CON NUESTROS CLIENTES</h1>
        <div className='sectionsArticles'>
          <CommitmentItem title="TRANSPARENCIA" description="En todo momento podras conocer el estado de tu servicio a traves de nuestra intranet, tiempos de salida y llegada, operadores a cargo, tarifas, etc." img="src/assets/TRANSPARENCIA.jpg" />
          <CommitmentItem title="RESPONSABILIDAD" description="En todo momento podras conocer el estado de tu servicio a traves de nuestra intranet, tiempos de salida y llegada, operadores a cargo, tarifas, etc." img="src/assets/RESPONSABILIDAD.jpg" />
          <CommitmentItem title="DISPONIBILIDAD" description="En todo momento podras conocer el estado de tu servicio a traves de nuestra intranet, tiempos de salida y llegada, operadores a cargo, tarifas, etc." img="src/assets/DISPONIBIIDAD.jpg" />
        </div>
      </section>
      <hr className='LineHr' />

      {/* Section 4: Map */}
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
    </main>
  )
}

export default Home