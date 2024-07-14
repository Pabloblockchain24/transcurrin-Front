/*Import styles*/
import "./Home.css"

/*Import dependencies*/
import React from 'react';

/*Import components*/
import Banner from "../../components/Banner/Banner";
import Statics from "../../components/Statics/Statics";
import Commitments from "../../components/Commitments/Commitments";
import Map from "../../components/Map/Map";
function Home() {

  return (
    <main className="HomeContainer">
      <Banner/>
      <Statics/>
      <Commitments/>
      <Map />
    </main>
  )
}

export default Home