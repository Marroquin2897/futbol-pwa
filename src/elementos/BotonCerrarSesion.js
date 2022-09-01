import React from 'react';
import Boton from './../elementos/Boton';
import {auth} from './../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const BtnCerrarSesion = () => {
    const navigate = useNavigate();
    const cerrarSesion = async () => {
       try{
        await signOut(auth);
        navigate('/iniciar-sesion'); //Regrese a la pagina de iniciar sesion
       } catch(error){
        console.log("Error al cerrar sesión");
       }
       
    }
    return ( 
        <Boton as="button" onClick={cerrarSesion}> Cerrar Sesión </Boton>
     );
}
 
export default BtnCerrarSesion;