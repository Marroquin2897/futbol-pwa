import {useEffect, useState} from 'react';
import {db} from './../firebase/firebaseConfig';
import { collection, onSnapshot,query,where,limit } from 'firebase/firestore';
import {useAuth} from './../contextos/AuthContext';

const useObtenerJugadores = () => {
    const[jugadores,cambiarJugadores] = useState([]);
    const {usuario} = useAuth();

    useEffect(() => { //Consulta para obtener la lista de jugadores
        
        const consulta = query(
            collection(db,'jugadores'),
            where('uidUsuario','==',usuario.uid),
            limit(15)
        );
       
        const unsuscribe = onSnapshot(consulta,(snapshot) => {
            cambiarJugadores(snapshot.docs.map((jugador) => {
                console.log(jugador.data())
                return{...jugador.data(), id: jugador.id}
            }));
        });
        return unsuscribe;
    },[usuario]);
    return [jugadores];
}
 
export default useObtenerJugadores;
