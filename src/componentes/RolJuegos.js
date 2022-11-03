import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {Titulo} from '../elementos/Header';
import '../ElementosJornadas.css';
import useObtenerJornadas from '../hooks/useObtenerJornadas';
import useObtenerVisitantesSeisEquipos from '../hooks/useObtenerVisitantesSeisEquipos';

const RolJuegos = () => {
    const [jornadaslocales,obtenerMasJornadas,hayMasPorCargar] = useObtenerJornadas();
    const [jornadasvisitantes,obtenerMasVisitantes,hayMasPorCargarVisi] = useObtenerVisitantesSeisEquipos();

     
    

   
    return ( 
            <>
            <Helmet>
            <title> Rol de Juegos</title>
            </Helmet>
            <Titulo> Juegos Programados </Titulo> 
            
            <table className='tabla'>
                <tr>
                    <th colSpan={4}> J O R N A D A 1</th>
                    
                </tr>
                <tr>
                    <th>Local</th>
                    <th>Llave</th>
                    <th>Llave</th>
                    <th>Visitante</th>
                </tr>
                
                
                
               
            </table>
            
            </>
     );
}
 
export default RolJuegos;  