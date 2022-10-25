import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {Titulo} from '../elementos/Header';
import ContenedorDiv from './../elementos/ContenedorDiv';
import {ContenedorBoton, Formulario, Input } from './../elementos/ElementosFormularios';
import Boton from './../elementos/Boton';
import { Link } from 'react-router-dom';



const RolJuegos = () => {
    let local = 0;
    let visitante = 0;
    const [numEquipos, cambiarNumEquipos] = useState('');

     
    const CalularLigaNumEquiposPar = (numEquipos) => {
        let numJornadas = numEquipos - 1;
        let numPartidosPorJornada = numEquipos / 2;
        let i,j,k = 0;
        const jornadas = [numJornadas][numPartidosPorJornada];
        //Jornadas
        for (i = 0, k = 0;  i < numJornadas; i ++) {
           for ( j = 0; j < numPartidosPorJornada; j ++) //Partidos x Jornadas
           { /* Primero se llena sucesivamente la columna de los locales*/
               jornadas[i][j] = new Partido(); 
               k=0;
               jornadas[i][j].local = k;
                k ++;
                 if (k === numJornadas)
                   k = 0;
           }
       }
       /*Segundo se llena la primera columna con el equipos mas alto local/visitante */
       for ( i = 0; i < numJornadas; i ++) { 
           if (i % 2 === 0) {
               jornadas[i][0].visitante = numEquipos - 1;
           }
           else{
               jornadas[i][0].visitante = jornadas[i][0].local;
               jornadas[i][0].local = numEquipos - 1;
           }
       }
       let equipoMasAlto = numEquipos - 1;
       let equipoImparMasAlto = equipoMasAlto - 1; 
   
       
      for (i = 0, k = equipoImparMasAlto; i < numJornadas; i ++)
       { /*Termina de llenar la tabla de lado visitante en orden ascendente*/
           for ( j = 1; j < numPartidosPorJornada; j ++)
           {
               jornadas[i][j].visitante = k;
               k --;
               if (k === -1)
                   k = equipoImparMasAlto;
           }
       } 
       return jornadas;
    }

    const MostrarPartidos = () => {

    }

    const CalcularLiga = () => {

    }
    return ( 
            <>
            <Helmet>
            <title> Rol de Juegos</title>
            </Helmet>
            <Titulo> Juegos Programados </Titulo> 

            <ContenedorDiv>
            <Formulario action=""  >
                
                <Input
                    type='text'
                    name='numequipos'
                    placeholder='Ingresa no. equipos'
                          
                /> 
                
                <ContenedorBoton>
                    <Boton as="button" type="submit"> Generar Juegos </Boton>
                    <Boton as={Link} to="/inicio">Regresar</Boton>  
                </ContenedorBoton>
            </Formulario>
        </ContenedorDiv>
            </>
     );
}
 
export default RolJuegos;  