import React from 'react';
import { Helmet } from 'react-helmet';
import {Titulo} from '../elementos/Header';
import ContenedorDiv from './../elementos/ContenedorDiv';
import {ContenedorBoton, Formulario, Input } from './../elementos/ElementosFormularios';
import Boton from './../elementos/Boton';
import { Link } from 'react-router-dom';
const RolJuegos = () => {
    

    const CalularLigaNumEquiposPar = ( ) => {

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