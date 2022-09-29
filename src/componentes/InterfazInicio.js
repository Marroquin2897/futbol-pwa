import React from 'react';
import { Helmet } from 'react-helmet';
import {Header, Titulo, } from '../elementos/Header';
import {ContenedorBoton } from './../elementos/ElementosFormularios';
import BtnCerrarSesion from './../elementos/BotonCerrarSesion';
import Boton from './../elementos/Boton';
import MenuVert from './MenuVertical';


const InterfazInicio = () => {
    return ( 
      <>
      <Helmet>
          <title>Inicio</title>
      </Helmet>
    <Header>
        <Titulo> N O T I C I A S </Titulo> 
    </Header>
    <MenuVert />
    <ContenedorBoton>
        <BtnCerrarSesion/>
        <Boton to="/registrar-escuela"> Registrar Escuela </Boton>
        <Boton to="/registrar-jugador"> Registrar Jugador </Boton>
        <Boton to="/lista-jugadores"> Lista de Jugadores </Boton>
        <Boton to="/lista-escuelas"> Lista de Escuelas </Boton>
    </ContenedorBoton>  
      
      
  </>
     );
}
 
export default InterfazInicio;