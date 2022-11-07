import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import '../menuSide.css';
import { Link } from 'react-router-dom';
import {FaPlusCircle,FaUserPlus,FaListAlt,FaRegCalendarAlt,FaExpeditedssl} from "react-icons/fa";

const fontStyles = {color: '#560000', fontSize: '60px'};

class MenuVert extends React.Component  {
    
    render () {
      return (
        <Menu >
          <Link id="registrarEscuela" className="menu-item" to="/registrar-escuela" > <FaPlusCircle  style={fontStyles} />Registrar Escuela</Link>
          <Link id="registrarJugador" className="menu-item" to="/registrar-jugador"> <FaUserPlus  style={fontStyles}/>Registrar Jugador</Link>
          <Link id="listaJugadores" className="menu-item" to="/lista-jugadores"><FaListAlt  style={fontStyles} /> Lista de Jugadores</Link>
          <Link id="generarol" className="menu-item" to= "/generar-rol"><FaRegCalendarAlt  style={fontStyles}/> Generar Rol </Link>
          <Link id="cerrarSesion" className="menu-item" to= "/iniciar-sesion"><FaExpeditedssl  style={fontStyles}/> Cerrar Sesion</Link>
        </Menu>
      );
    }
}
export default MenuVert;

