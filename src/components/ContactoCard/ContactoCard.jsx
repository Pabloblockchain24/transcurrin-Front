/*import styles*/
import "./ContactoCard.css"

/*import dependencies*/
import React from "react";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"

/*import context*/
import { useAuth } from "../../context/AuthContext"

function ContactoCard() {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm()
  const { sendMail } = useAuth();

  const onSubmit = handleSubmit(async (data) => {
    Swal.fire({
      title: 'Enviando correo...',
      text: 'Por favor espera un momento.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    }); 
    try {
      const solicitudContacto = await sendMail(data)
      if (solicitudContacto.status = 200) {
        Swal.fire({
          title: '¡Correo enviado!',
          confirmButtonText: 'OK',
          customClass: {
            confirmButton: 'swal2-button',
          }
        }).then(() => {
          navigate('/')
        })
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al enviar el correo. Intenta de nuevo',
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'swal2-button',
        }
      })
    }
  })

  return (
    <form onSubmit={onSubmit} className="contactFormContainer">
      <div className="contactFormItem"> <label htmlFor="NOMBRE" className="contactFormLabel" > NOMBRE: </label> <input type="text" {...register("nombre", { required: true })} className="ContactFormInput" placeholder="NOMBRE COMPLETO" /> </div>
      <div className="contactFormItem"> <label htmlFor="PHONE" className="contactFormLabel" > TELEFONO:</label> <input type="tel" {...register("telefono", { required: true })} className="ContactFormInput" placeholder="+569 1234 5678" /> </div>
      <div className="contactFormItem"> <label htmlFor="EMAIL" className="contactFormLabel" > EMAIL:</label> <input type="email" {...register("correo", { required: true })} className="ContactFormInput" placeholder="tucorreo@empresa.cl" /> </div>
      <div className="contactFormItem"> <label htmlFor="EMPRESA" className="contactFormLabel" > EMPRESA:</label> <input type="text" {...register("empresa", { required: true })} className="ContactFormInput" placeholder="EMPRESA" /> </div>

      <div className="contactFormItem"> <label htmlFor="SERVICIO" className="contactFormLabel">SERVICIO:</label>
        <select {...register("servicio", { required: true })} className="ContactFormInput" aria-label="Selecciona un servicio">
          <option selected value="">Ingrese servicio a cotizar</option>
          <option value="respaldoOperacion">Servicio integral</option>
          <option value="retiroPuerto">Retiro/entrega puerto</option>
          <option value="almacenamiento">Almacenamiento</option>
          <option value="desconsolidado">Desconsolidado/consolidado</option>
          <option value="entregaCliente">Entregas en cliente</option>
          <option value="devolucionVacio">Devolución vacios</option>
        </select>
      </div>

      <div className="contactFormTextArea"> <label htmlFor="MENSAJE" className="contactFormLabel">CUÉNTANOS MÁS: </label>
        <textarea
          {...register("mensaje", { required: true })}
          className="ContactFormInput"
          rows="4"
          placeholder="Cuéntanos más sobre lo que buscas..."
        ></textarea>
      </div>
      <button type="submit" className="ContactFormButton"> ENVIAR </button>
    </form>

  )
}
export default ContactoCard