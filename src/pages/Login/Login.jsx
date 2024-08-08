/*import styles*/
import "./Login.css"

/*import dependencies*/
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

/*import context*/
import { useAuth } from "../../context/AuthContext";
function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const onSubmit = handleSubmit(async data => {
    setLoading(true)
    const res = await login(data)
    if (res.response.status == 400) {

      Swal.fire({
        title: 'Error',
        text: res.response.data.message,
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'swal2-button',
        }
      })
    }
    setLoading(false)
  }
  )

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/intranet")
    }
  }, [isAuthenticated])

  return (

    <>
          <Helmet>
        <title> Transcurrin || Login </title>
        <meta name="description" content="Acceso clientes" />
        <meta property="og:title" content=" Transcurrin || Login" />
        <meta property="og:description" content="Acceso clientes." />
      </Helmet>
    <main className="loginContainer">
      <section className="loginCard">
        <h1 className="loginCardTitle"> ACCESO CLIENTES </h1>
        <form onSubmit={onSubmit} className="loginForm">

          <div >
            <input type="email"
              {...register("email", { required: true })}
              className="loginFormInput"
              placeholder="Email"
            />
            {errors.email && <p className="loginFormError">Favor ingresar email</p>}
          </div>

          <div>
            <input type="password"
              {...register("password", { required: true })}
              className="loginFormInput"
              placeholder="Password"
            />
            {errors.password && <p className="loginFormError">Favor ingresar contraseña</p>}
          </div>

          <button type="submit" className="loginFormButton">
            {loading ? 'INGRESANDO...' : 'INGRESAR'}
          </button>

        </form>

        <article className="loginResetPassword">
          <div className="loginResetPasswordText"> ¿ Olvidaste tu contraseña ? </div>
          <Link to="/ResetPassword" className="loginResetPasswordLink"> Recuperar contraseña </Link>
        </article>

      </section>
    </main>
    </>
    
  )
}

export default LoginPage