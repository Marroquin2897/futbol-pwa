import React from 'react';
import { Helmet } from 'react-helmet';
import {Titulo} from '../elementos/Header';
import {ReactComponent as IconoEditar} from './../imagenes/editar.svg';
import {ReactComponent as IconoBorrar} from './../imagenes/borrar.svg';
import useObtenerJugadores from './../hooks/useObtenerJugadores';
import { Link } from 'react-router-dom';
import Boton from './../elementos/Boton';
import borrarJugador from './../firebase/borrarJugador';
import {ReactComponent as IconoRegresar} from './../imagenes/regresar.svg';

import {
    Lista,
    ElementoLista,
    Nombre,
    Apellidos,
    Fecha,
    Nss,
    Curp,
    Boleta,
    Semestre,
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
                            {jugador.nombre} 
                        </Nombre>
                        <Apellidos>
                            {jugador.apellidos}
                        </Apellidos>
                        <Fecha>
                            {jugador.fechanac}
                        </Fecha>
                        <Nss>
                            {jugador.nss}
                        </Nss>
                        <Curp>
                            {jugador.curp}
                        </Curp>
                        <Boleta>
                            {jugador.boleta}
                        </Boleta>
                        <Semestre>
                            {jugador.semestre}
                        </Semestre>

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
                    <Boton as={Link} to='/inicio'>  <IconoRegresar/></Boton>
                </ContenedorBotonCentral>
            }
            

            {jugadores.length === 0 &&
                <ContenedorSubtitulo>
                    <Subtitulo> No hay jugadores por mostrar</Subtitulo>
                    <Boton as={Link} to='/registrar-jugador'>Agregar Jugador</Boton>
                </ContenedorSubtitulo>
                }
                
        </Lista>
        </>
     );
}
 
export default ListaJugadores;