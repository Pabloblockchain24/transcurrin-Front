/*import styles*/
import "./Clientes.css";

/*import components*/
import ClienteItem from "../../components/ClienteItem/ClienteItem"


function Clientes() {
  return (
    <main className="clientesContainer">
      <h1 className='clientesTitle'>CLIENTES</h1>
      <h2 className="clientesSubTitle"> Nuestro objetivo principal es ofrecer soluciones logísticas a nuestros clientes, garantizando que las operaciones entre el puerto y sus depósitos esten plenamente cubiertas y seguras.</h2>
      <section class="clientesSection">
        <ClienteItem empresa="CARPAVISION SPA" descripcion="Llegamos a Transcurrin por recomendación de un proveedor, nunca hemos tenido ningún problema, nos despreocupamos de los asuntos del puerto" contacto="Fabian Sandoval" cargo="Dueño" />
        <ClienteItem empresa="CONSTRUMART S.A." descripcion="Llevamos operando mas de 30 años con Transcurrin, conocen nuestra operación al reves y al derecho, son un gran aliado logistico" contacto="Yerko Caceres" cargo="Planner de importaciones" />
        <ClienteItem empresa="JDELRIO SPA" descripcion="Destaco su compromiso, nunca me han dejado una llamada o un correo sin contestar, el seguimiento a través de la pagina web es un plus" contacto="Jorge Del Rio" cargo="Dueño" />
      </section>
    </main>
  );
}

export default Clientes;
