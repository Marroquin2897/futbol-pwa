import React from 'react';
import { Helmet } from 'react-helmet';
import {Titulo} from '../elementos/Header';
import useObtenerJugadores from './../hooks/useObtenerJugadores';
import {
    Lista,
    ElementoLista,
    ListaDeCategorias,
    ElementoListaCategorias,
    Nombre,
    Escuela,
    Boleta,
    Fecha,
    ContenedorBotones,
    BotonAccion,
    BotonCargarMas,
    ContenedorBotonCentral,
    ContenedorSubtitulo,
    Subtitulo
} from './../elementos/ElementosDeLista';


const ListaJugadores = () => {
    const [jugadores] = useObtenerJugadores();
    
       
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
                        
                    </ElementoLista>
                );
            })}
        </Lista>
        </>
     );
}
 
export default ListaJugadores;