
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import {Titulo} from '../elementos/Header';
import {db} from './../firebase/firebaseConfig';
import useObtenerJugadores from '../hooks/useObtenerJugadores';

const ListaJugadores = () => {
    const jugadores = useObtenerJugadores();
    console.log(jugadores);
    
    
    return ( 
        <>
        <Helmet>
            <title>Lista de Jugadores</title>
        </Helmet>
        <Titulo> Jugadores: </Titulo> 
        
        </>
     );
}
 
export default ListaJugadores;