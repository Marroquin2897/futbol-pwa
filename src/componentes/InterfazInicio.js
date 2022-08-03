import React from 'react';
import { Helmet } from 'react-helmet';
import {Header, Titulo, } from '../elementos/Header';


import {ReactComponent as SvgLogin} from './../imagenes/iconmonstr-user-19.svg';
import styled from 'styled-components';



const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 6.25rem;
    margin-bottom: 2.25rem;
    background: #560000;
`;

const InterfazInicio = () => {


    return ( 
      <>
      <Helmet>
          <title>Inicio</title>
      </Helmet>
    <Header>
        <Titulo> AQUI VA LA INTERFAZ DE INICIO </Titulo> 
        
   
    </Header>
      
      
  </>
     );
}
 
export default InterfazInicio;