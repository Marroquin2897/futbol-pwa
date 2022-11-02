import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {Titulo} from '../elementos/Header';

import {
    Lista,
    ElementoLista,
    Local,
    Visitante,
    
} from './../elementos/ElementosListaJornadas';
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
            
            <Lista>
            {jornadaslocales.map((jornada) => {
                return(
                    <ElementoLista key={jornada.id}> 
                        <Local>
                            {jornada.Local}
                        </Local>
                    </ElementoLista>
                );
            })}
            
            
            </Lista> 
            <Lista>
            {jornadasvisitantes.map((jornada) => {
                return(
                    <ElementoLista key={jornada.id}> 
                        <Visitante>
                            {jornada.Visitante}
                        </Visitante>
                    </ElementoLista>
                );
            })}
            </Lista> 
            
            </>
     );
}
 
export default RolJuegos;  