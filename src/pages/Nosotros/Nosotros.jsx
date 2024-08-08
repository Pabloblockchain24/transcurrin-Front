/*import styles*/
import "./Nosotros.css";

/*import components*/
import NosotrosItem from "../../components/NosotrosItem/NosotrosItem";
function Nosotros() {
  return (
    <>
      <Helmet>
        <title> Transcurrin || Nosotros</title>
        <meta name="description" content="Nuestro equipo se destaca por sus +30 años de experiencia especializado en transporte de carga desde el puerto de San Antonio a cualquier parte de Chile." />
        <meta property="og:title" content=" Transcurrin || Nosotros" />
        <meta property="og:description" content="Nuestro equipo se destaca por sus +30 años de experiencia especializado en transporte de carga desde el puerto de San Antonio a cualquier parte de Chile." />
      </Helmet>

      <main className="nosotrosContainer">
        <h1 className='nosotrosTitleSection'>NOSOTROS</h1>
        <section class="nosotrosSection">
          <NosotrosItem title="QUIENES SOMOS" description="Transportes Currin es una empresa de logística y transporte de carga por carretera especializada en importaciones y exportaciones gracias a su ubicacion estrategica. La empresa nace en 1994 y mantiene una base regular de operadores tanto de tractocamiones,como operadores de grua, que garantizan la maxima confiabilidad en el cuidado y manipulación de las cargas de sus clientes." img="../../../imgs/nosotros/Entregas.jpeg" />
          <NosotrosItem title="DONDE ESTAMOS" description=" Nuestro depósito y centro de operaciones se encuentra ubicado en el sector de aguas buenas, San Antonio, en una privilegiada ubicación a solo 10 minutos del acceso a los principales puertos de la región STI y DPWorld, además nos encontramos cercanos a los principales terminales extraportuarios y depósitos de devolución de contenedores vacios, lo cual, nos permite optimizar en tiempo y forma las operaciones requeridas por nuestros clientes." img="../../../imgs/nosotros/nosotrosUbicacion.jpg" />
          <NosotrosItem title="NUESTRO EQUIPO " description="Nuestro equipo de trabajo se caracteriza por la experiencia, contamos con operadores de tractocamiones de en promedio 30 años de experiencia en el rubro que conocen ampliamente las principales rutas del pais, así como operadores de grúa expertos en operaciones de manipulación de contenedores con grúas portacontenedores y desconsolidado con grúa de horquillas. Los años de experiencia y trabajo en equipo nos llevan a manejar las situaciones del dia a dia de la mejor forma posible." img="../../../imgs/nosotros/nosotrosTrabajador.jpg" />
        </section>
      </main>
    </>

  );
}

export default Nosotros;
