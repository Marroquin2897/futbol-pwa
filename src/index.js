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
import ListaJugadores from './componentes/ListaJugadores';
import RolJuegos from './componentes/RolJuegos';
import EditarJugador from './componentes/EditarJugador';
import {Helmet} from 'react-helmet';
import favicon from './imagenes/icono2-burrito.png';
import InterfazInicio from './componentes/InterfazInicio';
import {AuthProvider} from './contextos/AuthContext';
import RutaPrivada from './componentes/RutaPrivada'
import ForgotPassword from './componentes/ForgotPassword';
import Home from './componentes/Home';
import './App.css';




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
            <Route path="/forgot-password" element = {<ForgotPassword/>}/>
            <Route path="/" element = {<Home/>}/>

            <Route path="/inicio" element={
              <RutaPrivada>
                <InterfazInicio/>
              </RutaPrivada>
            }/>
            <Route path="/registrar-escuela" element={
              <RutaPrivada>
                <RegistrarEscuela/>
              </RutaPrivada>
            }/>
            <Route path="/registrar-jugador" element={
              <RutaPrivada>
                <RegistrarJugador/>
              </RutaPrivada>
            }/>
            <Route path="/lista-jugadores" element={
              <RutaPrivada>
                <ListaJugadores/>
              </RutaPrivada>
            }/>
            
            <Route path="/editar-jugador/:id" element={
              <RutaPrivada>
                <EditarJugador/>
              </RutaPrivada>
            }/>
            <Route path="/rol-juegos" element={
              <RutaPrivada>
                <RolJuegos/>
              </RutaPrivada>
            }/>
          </Routes>
          <App/>
        </BrowserRouter>
    </AuthProvider>    
      
    </>
    
    
    
   );
}



ReactDOM.render(<Index/>,document.getElementById('root'));
