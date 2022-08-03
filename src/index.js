import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Contenedor from './elementos/Contenedor';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import IniciarSesion from './componentes/IniciarSesion';
import RegistroUsuario from './componentes/RegistroUsuario';
import {Helmet} from 'react-helmet';
import favicon from './imagenes/icono2-burrito.png';
import InterfazInicio from './componentes/InterfazInicio';
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
      <BrowserRouter>
      <Contenedor>
        <Routes>
          <Route path="/iniciar-sesion" element = {<IniciarSesion/>}/>
          <Route path="/crear-cuenta" element = {<RegistroUsuario/>}/>
          <Route path="/inicio" element = {<InterfazInicio/>}/>
         
        </Routes>
        <App/>
      </Contenedor>
      </BrowserRouter>
    </>
    
    
    
   );
}



ReactDOM.render(<Index/>,document.getElementById('root'));