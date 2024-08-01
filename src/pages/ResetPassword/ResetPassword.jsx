/*import styles*/
import "./ResetPassword.css"

/*import dependencies*/
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

/*import context*/
import { useAuth } from "../../context/AuthContext"

/*import components*/
import Loader from '../../components/Loader/Loader';

function ResetPassword() {
    const { handleSubmit, register } = useForm()
    const { user, sendMailResetPassword } = useAuth();
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (data) => {
        setLoading(true)
        try {
            const res = await sendMailResetPassword(data)
    
            if (res.response && res.response.status === 400) {
                Swal.fire({
                    title: 'Error',
                    text: res.response.data.message,
                    confirmButtonText: 'OK',
                    customClass: {
                        confirmButton: 'swal2-button',
                    }
                })
            } else if (res.status === 200) {
                Swal.fire({
                    title: '¡Correo enviado!',
                    text: 'Revisa el correo ingresado y sigue las instrucciones.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                }).then(() => {
                    navigate('/intranet')
                })
            } else {
                Swal.fire({
                    title: 'Error',
                    text: 'Ha ocurrido un error inesperado.',
                    confirmButtonText: 'OK',
                    customClass: {
                        confirmButton: 'swal2-button',
                    }
                })
            }
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'No se pudo enviar el correo. Por favor, inténtalo de nuevo más tarde.',
                confirmButtonText: 'OK',
                customClass: {
                    confirmButton: 'swal2-button',
                }
            })
        } finally {
            setLoading(false)
        }
    })


if (loading) {
    return (<Loader />)
}

console.log(user)

return (
    <main className="resetPasswordContainer">
        <form onSubmit={onSubmit} className="resetPasswordForm">
            <h1 className='resetPasswordTitle'> { user ? 'VERIFICAR USUARIO': 'REESTABLECER CONTRASEÑA'}</h1>
            <h2 className='resetPasswordSubtitle'> { user ? 'Ingresa tu correo, y te enviaremos un link para cambiar tu contraseña y verificar tu usuario': 'Ingresa tu correo y te enviaremos un link para reestablecer tu contraseña'} </h2>
            <div className='resetPasswordInput'>
                <label htmlFor="emailReset" className='resetPasswordLabel'> EMAIL:</label>
                <input type="email"
                    {...register("email", { required: true })}
                    className="resetPasswordInputBox"
                    placeholder="tucorreo@empresa.cl"
                    defaultValue={user ? user.email : ""}
                />
            </div>
            <button type="submit" className="resetPasswordButton"> {user ? 'VERIFICAR ': 'RECUPERA TU CONTRASEÑA'}</button>
        </form>
    </main>
)
}

export default ResetPassword;