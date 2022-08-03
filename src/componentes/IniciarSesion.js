import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import {Header, Titulo, } from '../elementos/Header';
import Boton from './../elementos/Boton';
import {ContenedorBoton, Formulario, Input } from './../elementos/ElementosFormularios';
import {ReactComponent as SvgLogin} from './../imagenes/iconmonstr-user-19.svg';
import styled from 'styled-components';
import {  signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './../firebase/firebaseConfig';
import Alerta from './../elementos/Alerta';
import {useNavigate} from 'react-router-dom';
const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 15.5rem;
    margin-bottom: 5.25rem;
    color: #560000;
`;
const IniciarSesion = () => {
    const navigate = useNavigate();
   
    const[email, establecerEmail] = useState('');
    const[password, establecerPassword] = useState('');
    const[estadoAlerta,cambiarEdoAlerta] = useState(false);
    const[alerta,cambiarAlerta] = useState({});

const handleChange = (e) => {
    if(e.target.name === 'email'){
        establecerEmail(e.target.value);
    } else if(e.target.name === 'password'){
        establecerPassword(e.target.value);
    }
}
const handleSubmit = async (e) =>{ //Para obtener los datos de los inputs
    e.preventDefault();
    cambiarEdoAlerta(false);
    cambiarAlerta({});
    //validar el correo
    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if(!expresionRegular.test(email)){ //Si NO hay correo entonces mostramos mensaje de error
        cambiarEdoAlerta(true);
        cambiarAlerta({
            tipo: 'error',
            mensaje:'Ingresa un correo valido'
        });
        return;
    }

    if( email ==='' || password === ''){ //Validacion de que llena todos los campos
        cambiarEdoAlerta(true);
        cambiarAlerta({
            tipo: 'error',
            mensaje:'Falta llenar email y/o contraseña'
        });
        return;
    }

    //Guardar los datos en FIREBASE
    try{
        await signInWithEmailAndPassword(auth,email,password);
       
        navigate('/inicio');
    } catch(error){ //Mostrar los errores que puede haber en cada campo
        console.log(error)
        cambiarEdoAlerta(true);
       let mensaje;
       switch(error.code){
            case 'auth/wrong-password':
                mensaje = 'La contraseña no es correcta.'
                break;
            case 'auth/user-not-found':
                mensaje = 'No se encontro una cuenta con este correo electronico'
                break;
            default:  
                mensaje = 'Hubo un error al iniciar sesión.'
                break;
       }
       cambiarAlerta({
        tipo:'error',
        mensaje: mensaje
       });
    }
        
}
    return (  
      <>
      <Helmet>
          <title>Iniciar Sesion</title>
      </Helmet>
    <Header>
        <Titulo> Iniciar Sesion </Titulo> 
        
   
    </Header>
      <Formulario onSubmit={handleSubmit}>
          <Svg/>
          <Input
                  type='email'
                  name='email'
                  placeholder='Ingresa tu correo'
                  value = {email}
                  onChange={handleChange}
              />
          <Input
                  type='password'
                  name='password'
                  placeholder='Contraseña'
                  value={password}
                  onChange={handleChange}
              />
          
          <ContenedorBoton>
              <Boton as="button" type="submit"> Iniciar Sesion </Boton>
          </ContenedorBoton>    
          
      </Formulario>
      <Alerta
        tipo={alerta.tipo}
        mensaje={alerta.mensaje}
        estadoAlerta={estadoAlerta}
        cambiarEdoAlerta={cambiarEdoAlerta}/>
  </>
    );
}
 
export default IniciarSesion;