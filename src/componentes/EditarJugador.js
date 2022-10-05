import React from 'react';
import { Helmet } from 'react-helmet';
import {Titulo} from '../elementos/Header';

const EditarJugadores = () => {
    return ( 
        <>
        <Helmet>
            <title>Editar Jugador</title>
        </Helmet>
        <Titulo> Editar Jugador: </Titulo> 
        </>
     );
}
 
export default EditarJugadores;