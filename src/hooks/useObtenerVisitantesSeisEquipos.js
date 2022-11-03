import {useEffect, useState} from 'react';
import {db} from './../firebase/firebaseConfig';
import { collection,query,where,startAfter,onSnapshot,orderBy } from 'firebase/firestore';

const useObtenerVisitantesSeisEquipos = () => {
    const[jornadasvisitantes,cambiarJornadasVisitantes] = useState([]);
    const[ultimoVisitante,cambiarUltimoVisitante] = useState(null)
    const[hayMasPorCargarVisi,cambiarHayMasPorCargar] = useState(false);

    const obtenerMasVisitantes = () => { //Mostrar el resto de equipos locales
        const consulta = query (
            collection(db,'VisitantesSeisEquipos'),
            where('Visitante','in',["6","5","4"]),
            
            startAfter(ultimoVisitante)
        );
        onSnapshot(consulta,(snapshot) => {
            if(snapshot.docs.length > 0){
                cambiarUltimoVisitante(snapshot.docs[snapshot.docs.length -1]);

                cambiarJornadasVisitantes(jornadasvisitantes.concat(snapshot.docs.map((jornada) => {
                    return{...jornada.data(), id: jornada.id}
                })))
            } else{
                cambiarHayMasPorCargar(false);
            }
        },error => {console.log(error)});
    }
    useEffect(() => {
        const consulta = query(
            collection(db,'VisitantesSeisEquipos'),
            where('Visitante','in',["6","5","4"]),
            
            
        );
        const unsuscribe = onSnapshot(consulta,(snapshot) => {
            if(snapshot.docs.length > 0){
                cambiarUltimoVisitante(snapshot.docs[snapshot.docs.length-1]);
                cambiarHayMasPorCargar(true);
            } else{
                cambiarHayMasPorCargar(false);
            }
            cambiarJornadasVisitantes(snapshot.docs.map((jornada) => {
                return{...jornada.data(), id: jornada.id}
            }));
        });
        return unsuscribe;
    },[jornadasvisitantes]);
    return [jornadasvisitantes,obtenerMasVisitantes,hayMasPorCargarVisi];
}
 
export default useObtenerVisitantesSeisEquipos;