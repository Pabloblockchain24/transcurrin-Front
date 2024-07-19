/*import styles*/
import "./Contacto.css";

/*import components*/
import ContactoCard from "../../../components/ContactoCard/ContactoCard";

function Contacto() {
  return (
    <main className="contactoContainer">
      <div className="contactoCard">
        <article className="contactoHeader">
          <h1 className="contactoHeaderTitle"> FORMULARIO CONTACTO </h1>
          <h2 className="contactoHeaderSubtitle" > Escribenos y te contactaremos a la brevedad </h2>
        </article>
        <ContactoCard />
      </div>

    </main>
  );
}




export default Contacto;
