/*Import styles*/
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/*Import dependencies*/
import React from 'react';
import Slider from 'react-slick';

/*Import components*/
import BannerItem from "../BannerItem/BannerItem"

function Banner() {
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
    return (
        <>
            <section >
                <Slider {...settings}>
                    <BannerItem title="SOLUCIONES LOGISTICAS A TU MEDIDA" subtitle="Nos adaptamos a tus necesidades" img="src/assets/banners/banner1.jpg" />
                    <BannerItem title="EXPERIENCIA A TU SERVICIO" subtitle="35 años de operación nos respaldan" img="src/assets/banners/banner2.jpg" />
                    <BannerItem title="CENTRATE EN TU NEGOCIO PRINCIPAL" subtitle="Despreocupate de la logistica de tu carga" img="src/assets/banners/banner3.jpg" />
                </Slider>
            </section>
            <hr />
        </>

    )
}

export default Banner