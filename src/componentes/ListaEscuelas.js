import React from 'react';
import { Helmet } from 'react-helmet';
import {Titulo} from '../elementos/Header';
const ListaEscuelas = () => {
    return ( 
        <>
         <Helmet>
            <title>Lista de Escuelas</title>
        </Helmet>
        <Titulo> Escuelas: </Titulo> 
        </>
     );
}
 
export default ListaEscuelas;