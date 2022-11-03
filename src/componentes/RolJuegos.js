import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {Titulo} from '../elementos/Header';
import '../ElementosJornadas.css';
import useObtenerJornadas from '../hooks/useObtenerJornadas';
import useObtenerVisitantesSeisEquipos from '../hooks/useObtenerVisitantesSeisEquipos';
import { Formulario, Input,InputLlave,ElementoLista,LlaveLocal,LlaveVisitante,Lista } from './../elementos/ElementosListaJornadas';
const RolJuegos = () => {
    const [jornadaslocales,obtenerMasJornadas,hayMasPorCargar] = useObtenerJornadas();
    const [jornadasvisitantes,obtenerMasVisitantes,hayMasPorCargarVisi] = useObtenerVisitantesSeisEquipos();
    const[nombreEquipo, establecerNombreEquipo] = useState('');
     
    

   
    return ( 
            <>
            <Helmet>
            <title> Rol de Juegos</title>
            </Helmet>
            <Titulo> Juegos Programados </Titulo> 
            <table className='tabla'>
               <tr className='tr'>
                    <th className='th' colSpan={4}> J O R N A D A 1</th> 
                </tr>
            </table>
            <Formulario>
               <Lista>
               {jornadaslocales.map((jornada)=>{
                  return(
                     
                     <ElementoLista key={jornada.id}> 
                        <Input type='text'
                           name='nombre'
                           placeholder='Nombre-Equipo'
                           value={nombreEquipo}
                            />
                        <LlaveLocal> {jornada.Local} </LlaveLocal>
                     </ElementoLista>
                  );
               })}
               </Lista>
               <Lista>
               {jornadasvisitantes.map((jornada)=>{
                  return(
                     <ElementoLista key={jornada.id}>
                        <LlaveVisitante> {jornada.Visitante} </LlaveVisitante>
                        <Input type='text'
                           name='nombre'
                           placeholder='Nombre-Equipo'
                           value={nombreEquipo}
                            />
                     </ElementoLista>
                  );
               })}
               
               </Lista>
               
               
               

              
            </Formulario>


            
                
            
            
            
            </>
     );
}
 
export default RolJuegos;  