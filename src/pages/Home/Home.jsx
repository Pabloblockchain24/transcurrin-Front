/*Import styles*/
import "./Home.css"

/*Import dependencies*/
import React from 'react';
import { Helmet } from 'react-helmet-async';

/*Import components*/
import Banner from "../../components/Banner/Banner";
import Statics from "../../components/Statics/Statics";
import Commitments from "../../components/Commitments/Commitments";
import Map from "../../components/Map/Map";
function Home() {

  return (

    <>
      <Helmet>
        <title>Transcurrin || Transporte de carga y Logística San Antonio y Valparaíso </title>
        <meta name="description" content="Servicios integrales de transporte de carga de importaciones y exportaciones del puerto de San Antonio y Valparaíso a todo Chile." />
        <meta property="og:title" content=" Transcurrin || Home" />
        <meta property="og:description" content="Servicios integrales de transporte de carga de importaciones y exportaciones del puerto de San Antonio y Valparaíso a todo Chile." />
      </Helmet>
      <main className="HomeContainer">
        <Banner />
        <Statics />
        <Commitments />
        <Map />
      </main>
    </>

  )
}

export default Home