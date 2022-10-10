import React from 'react';
import { Helmet } from 'react-helmet';
import {Titulo} from '../elementos/Header';
import {ReactComponent as IconoEditar} from './../imagenes/editar.svg';
import {ReactComponent as IconoBorrar} from './../imagenes/borrar.svg';
import {ReactComponent as IconoPersona} from './../imagenes/persona.svg';
import useObtenerJugadores from './../hooks/useObtenerJugadores';
import { Link } from 'react-router-dom';
import Boton from './../elementos/Boton';
import borrarJugador from './../firebase/borrarJugador';
import {
    Lista,
    ElementoLista,
    Nombre,
    Apellidos,
    Boleta,
    ContenedorBotones,
    BotonAccion,
    BotonCargarMas,
    ContenedorBotonCentral,
    ContenedorSubtitulo,
    Subtitulo
} from './../elementos/ElementosDeLista';


const ListaJugadores = () => {
    const [jugadores,obtenerMasJugadores,hayMasPorCargar] = useObtenerJugadores();
    
       
    return ( 
        <>
        <Helmet>
            <title>Lista de Jugadores</title>
        </Helmet>
        <Titulo> Jugadores: </Titulo> 
        
        <Lista>
            {jugadores.map((jugador) => {
                return(
                    <ElementoLista key={jugador.id}>
                        <Nombre>
                            <IconoPersona/>
                            {jugador.nombre} 
                        </Nombre>
                        <Apellidos>
                            {jugador.apellidos}
                        </Apellidos>
                        <Boleta>
                            {jugador.boleta}
                        </Boleta>
                        <ContenedorBotones>
                            <BotonAccion as={Link} to={`/editar-jugador/${jugador.id}`}>
                                <IconoEditar/>     
                            </BotonAccion>
                            <BotonAccion onClick={() => borrarJugador(jugador.id)}>
                                <IconoBorrar/>
                            </BotonAccion>
                        </ContenedorBotones>
                    </ElementoLista>
                );
            })}
            {hayMasPorCargar && 
                <ContenedorBotonCentral>
                    <BotonCargarMas onClick={() => obtenerMasJugadores()}> Cargas más </BotonCargarMas>
                </ContenedorBotonCentral>
            }
            

            {jugadores.length === 0 &&
                <ContenedorSubtitulo>
                    <Subtitulo> No hay jugadores por mostrar</Subtitulo>
                    <Boton as={Link} to='/'>Agregar Jugador</Boton>
                </ContenedorSubtitulo>
                }
                
        </Lista>
        </>
     );
}
 
export default ListaJugadores;