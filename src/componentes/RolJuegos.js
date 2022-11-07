import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {Titulo} from '../elementos/Header';
import '../ElementosJornadas.css';
import useObtenerJornadas from '../hooks/useObtenerJornadas';
import useObtenerVisitantesSeisEquipos from '../hooks/useObtenerVisitantesSeisEquipos';
import { Formulario, Input,ElementoLista,LlaveLocal,LlaveVisitante,Lista } from './../elementos/ElementosListaJornadas';
import { BotonCentrado } from '../elementos/ElementosFormularios';
import Boton from './../elementos/Boton';
import Alerta from './../elementos/Alerta';

const RolJuegos = () => {

    const [jornadaslocales,obtenerMasJornadas,hayMasPorCargar] = useObtenerJornadas();
    const [jornadasvisitantes,obtenerMasVisitantes,hayMasPorCargarVisi] = useObtenerVisitantesSeisEquipos();
    const[nombreEquipo1, establecerNombreEquipo1] = useState('');
    const[nombreEquipo2, establecerNombreEquipo2] = useState('');
    const[nombreEquipo3, establecerNombreEquipo3] = useState('');
    const[nombreEquipo4, establecerNombreEquipo4] = useState('');
    const[nombreEquipo5, establecerNombreEquipo5] = useState('');
    const[nombreEquipo6, establecerNombreEquipo6] = useState('');
     
   const handleChange = (e) => {
      switch(e.target.name){
         case 'equipo1':
            establecerNombreEquipo1(e.target.value);
            break;
         case 'equipo2':
            establecerNombreEquipo2(e.target.value);
            break;
         case 'equipo3':
            establecerNombreEquipo3(e.target.value);
            break;
         case 'equipo4':
            establecerNombreEquipo4(e.target.value);
            break;
         case 'equipo5':
            establecerNombreEquipo5(e.target.value);
            break;
         case 'equipo1':
            establecerNombreEquipo6(e.target.value);
            break;
         default:
            break;
   }
}
   const handleSubmit = (e) => {
      e.preventDefault();
      cambiarEdoAlerta(false);
      cambiarAlerta({});

      if(nombreEquipo1 === '' || nombreEquipo2 === '' || nombreEquipo3 === '' || nombreEquipo4 === '' || nombreEquipo5 === '' || nombreEquipo6 === ''){
         cambiarEdoAlerta(true);
            cambiarAlerta({
                tipo: 'error',
                mensaje:'Completa todos los campos'
            });
            return;
      }

   }
   
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
               <BotonCentrado>
                  <Boton as="button" type="submit"> Guardar Datos</Boton>
               </BotonCentrado>           
            </Formulario>
            <Alerta 
            tipo= {alerta.tipo}
            mensaje= {alerta.mensaje}
            estadoAlerta={estadoAlerta}
            cambiarEdoAlerta={cambiarEdoAlerta}/>
            

            </>
     );
}
 
export default RolJuegos;  