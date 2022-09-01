import React from 'react';
import { Helmet } from 'react-helmet';
import {Header, Titulo, } from '../elementos/Header';
import {ContenedorBoton } from './../elementos/ElementosFormularios';
import Boton from './../elementos/Boton';
const InterfazInicio = () => {


    return ( 
      <>
      <Helmet>
          <title>Inicio</title>
      </Helmet>
    <Header>
        <Titulo> N O T I C I A S </Titulo> 
    </Header>
    <ContenedorBoton>
        <Boton as="button" type="submit"> Registrar Escuela </Boton>
    </ContenedorBoton>  
      
      
  </>
     );
}
 
export default InterfazInicio;