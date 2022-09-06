import { useHistory } from "react-router-dom";
import { Helmet } from 'react-helmet';
import {Header, Titulo, } from '../elementos/Header';
const Password = () => {
    return ( 
        <>
            <Helmet>
                    <title>Inicio</title>
                </Helmet>
            <Header>
                <Titulo> N O T I C I A S </Titulo> 
            </Header>

        </>
        
     );
}
 
export default Password;