import React from 'react';
import { Helmet } from 'react-helmet';
import {Header, Titulo, } from '../elementos/Header';
import {ContenedorBoton } from './../elementos/ElementosFormularios';
import BtnCerrarSesion from './../elementos/BotonCerrarSesion';
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
        <BtnCerrarSesion/>
    </ContenedorBoton>  
      
      
  </>
     );
}
 
export default InterfazInicio;