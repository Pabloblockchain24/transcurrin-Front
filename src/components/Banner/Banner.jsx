/*Import styles*/
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Banner.css"

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
                    <BannerItem title="EXPERIENCIA A TU SERVICIO" subtitle="35 años de operación nos respaldan" img="../../../imgs/banner1.jpg" />
                    <BannerItem title="SOLUCIONES LOGÍSTICAS A TU MEDIDA" subtitle="Nos adaptamos a tus necesidades" img="../../../imgs/banner2.jpg" />
                    <BannerItem title="CENTRATE EN TU NEGOCIO PRINCIPAL" subtitle="Despreocupate de la logística de tu carga" img="../../../imgs/banner3.jpg" />
                </Slider>
            </section>
            <hr />
        </>

    )
}

export default Banner
