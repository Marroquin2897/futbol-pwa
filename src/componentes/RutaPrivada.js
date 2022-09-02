import React from 'react';
import { useAuth } from './../contextos/AuthContext';
import {Navigate} from 'react-router-dom';

const RutaProtegida = ({children}) => {
    const {usuario} = useAuth(); //Saber si el usuario a iniciado sesión

    if(usuario){
        return children;
    } else{
        return <Navigate replace to="/iniciar-sesion"/>
    }
}
 
export default RutaProtegida;