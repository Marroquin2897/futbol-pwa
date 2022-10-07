import {useEffect, useState} from 'react';
import {db} from './../firebase/firebaseConfig';
import { collection, onSnapshot,query,where,limit, startAfter } from 'firebase/firestore';
import {useAuth} from './../contextos/AuthContext';

const useObtenerJugadores = () => {
    const[jugadores,cambiarJugadores] = useState([]);
    const[ultimoJugador,cambiarUltimoJugador] = useState(null)
    const[hayMasPorCargar,cambiarHayMasPorCargar] = useState(false);
    const {usuario} = useAuth();

    const obtenerMasJugadores = () => { //Mostrar el resto de jugadores
        const consulta = query (
            collection(db,'jugadores'),
            where('uidUsuario','==',usuario.uid),
            limit(10),
            startAfter(ultimoJugador)
        );
        onSnapshot(consulta,(snapshot) => {
            if(snapshot.docs.length > 0){
                cambiarUltimoJugador(snapshot.docs[snapshot.docs.length -1]);

                cambiarJugadores(jugadores.concat(snapshot.docs.map((jugador) => {
                    return{...jugador.data(), id: jugador.id}
                })))
            } else{
                cambiarHayMasPorCargar(false);
            }
        },error => {console.log(error)});
    }
    useEffect(() => { //Consulta para obtener la lista de jugadores
        
        const consulta = query(
            collection(db,'jugadores'),
            where('uidUsuario','==',usuario.uid),
            limit(10)   
        );
        
        const unsuscribe = onSnapshot(consulta,(snapshot) => {
            if(snapshot.docs.length > 0){
                cambiarUltimoJugador(snapshot.docs[snapshot.docs.length-1]);
                cambiarHayMasPorCargar(true);
            } else{
                cambiarHayMasPorCargar(false);
            }
            cambiarJugadores(snapshot.docs.map((jugador) => {
                return{...jugador.data(), id: jugador.id}
            }));
        });
        return unsuscribe;
    },[usuario]);
    
    return [jugadores,obtenerMasJugadores,hayMasPorCargar];
    
}
 
export default useObtenerJugadores;
