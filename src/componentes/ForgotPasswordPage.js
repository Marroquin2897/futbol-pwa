import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

export const ForgotPasswordPage = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [emailValue, setEmailValue] = useState('');
   const navigate = useNavigate();

    const onsubmitClicked = async () => {
        try {
            await axios.put(`/api/forgot-password/${emailValue}`);
            setSuccess(true);
            setTimeout(() => {
                navigate('/iniciar-sesion');
            }, 3000);
        } catch (e) {
            setErrorMessage(e.message);
        }
    }

    return success ? (
        <div className="content-container">
            <h1>Success</h1>
            <p>Revisa tu bandeja de entrada donde encontraras un link para restablecer tu contraseña</p>
        </div>
    ) : (
        <div className="content-container">
            <h1>Olvidaste la Contraseña</h1>
            <p>Ingresa tu correo y te enviaremos un link para restablecer tu contraseña</p>
            {errorMessage && <div className="fail">{errorMessage}</div>}
            <input
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
                placeholder="correo-electronico@mail.com" />
                <button
                    disabled={!emailValue}
                    onClick={onsubmitClicked}
                    >Send Reset Link</button>
        </div>
    )
} 