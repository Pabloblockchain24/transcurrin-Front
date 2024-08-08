/*import styles*/
import "./Contacto.css";

/*import components*/
import ContactoCard from "../../components/ContactoCard/ContactoCard";

/*import dependencies*/
import { Helmet } from 'react-helmet-async';

function Contacto() {
  return (
    <>
      <Helmet>
        <title> Transcurrin || Contacto </title>
        <meta name="description" content="Escríbenos y nos contactaremos a la brevedad." />
        <meta property="og:title" content=" Transcurrin || Contacto" />
        <meta property="og:description" content="Escríbenos y nos contactaremos a la brevedad." />
      </Helmet>
      <main className="contactoContainer">
        <div className="contactoCard">
          <article className="contactoHeader">
            <h1 className="contactoHeaderTitle"> FORMULARIO CONTACTO </h1>
            <h2 className="contactoHeaderSubtitle" > Escríbenos y te contactaremos a la brevedad </h2>
          </article>
          <ContactoCard />
        </div>

      </main>
    </>

  );
}




export default Contacto;
