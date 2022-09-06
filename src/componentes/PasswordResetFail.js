import { useHistory } from "react-router-dom";
import { Helmet } from 'react-helmet';
import {Header, Titulo, } from '../elementos/Header';
const PasswordFail = () => {
    return ( 
        <>
            <Helmet>
                    <title>Inicio</title>
                </Helmet>
            <Header>
                <Titulo> Password Fail </Titulo> 
            </Header>

        </>
        
     );
}
 
export default PasswordFail;