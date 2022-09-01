import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import IniciarSesion from './componentes/IniciarSesion';
import RegistroUsuario from './componentes/RegistroUsuario';
import RegistrarEscuela from './componentes/RegistrarEscuela';
import RegistrarJugador from './componentes/RegistrarJugador';
import {Helmet} from 'react-helmet';
import favicon from './imagenes/icono2-burrito.png';
import InterfazInicio from './componentes/InterfazInicio';
import {AuthProvider} from './contextos/AuthContext';
WebFont.load({
  google: { //Tipo de letra para la pwa
    families: ['Ubuntu: 400,500,700', 'Droid Serif']
  }
});

const Index = () => {
  return ( 
    <>
    <Helmet>
      <link rel='shortcut icon' href={favicon} type='image/x-icon'/>
    </Helmet>

    <AuthProvider>
      <BrowserRouter>
        
          <Routes>
            <Route path="/iniciar-sesion" element = {<IniciarSesion/>}/>
            <Route path="/crear-cuenta" element = {<RegistroUsuario/>}/>
            <Route path="/inicio" element = {<InterfazInicio/>}/>
            <Route path="/registrar-escuela" element = {<RegistrarEscuela/>}/>
            <Route path="/registrar-jugador" element = {<RegistrarJugador/>}/>
          </Routes>
          <App/>
        </BrowserRouter>
    </AuthProvider>    
      
    </>
    
    
    
   );
}



ReactDOM.render(<Index/>,document.getElementById('root'));