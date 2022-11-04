import {useEffect, useState} from 'react';
import {db} from './../firebase/firebaseConfig';
import { collection,query,where,startAfter,onSnapshot,orderBy } from 'firebase/firestore';

const useObtenerVisitantesJ5SeisEquipos = () => {
    const[j5visitantes,cambiarVisitantesJ5] = useState([]);
    const[ultimoVisitanteJ5,cambiarUltimoVisitanteJ5] = useState(null)
    const[hayMasPorCargarVisiJ5,cambiarHayMasPorCargarVisitanteJ5] = useState(false);

    const obtenerMasVisitantesJ5 = () => { //Mostrar el resto de equipos locales
        const consulta = query (
            collection(db,'VisitantesSeisEquipos'),
            where('Visitante','in',["4","3","2"]),
            
            startAfter(ultimoVisitanteJ5)
        );
        onSnapshot(consulta,(snapshot) => {
            if(snapshot.docs.length > 0){
                cambiarUltimoVisitanteJ5(snapshot.docs[snapshot.docs.length -1]);

                cambiarVisitantesJ5(j5visitantes.concat(snapshot.docs.map((jornada) => {
                    return{...jornada.data(), id: jornada.id}
                })))
            } else{
                cambiarHayMasPorCargarVisitanteJ5(false);
            }
        },error => {console.log(error)});
    }
    useEffect(() => {
        const consulta = query(
            collection(db,'VisitantesSeisEquipos'),
            where('Visitante','in',["4","3","2"]),
            
            
        );
        const unsuscribe = onSnapshot(consulta,(snapshot) => {
            if(snapshot.docs.length > 0){
                cambiarUltimoVisitanteJ5(snapshot.docs[snapshot.docs.length-1]);
                cambiarHayMasPorCargarVisitanteJ5(true);
            } else{
                cambiarHayMasPorCargarVisitanteJ5(false);
            }
            cambiarVisitantesJ5(snapshot.docs.map((jornada) => {
                return{...jornada.data(), id: jornada.id}
            }));
        });
        return unsuscribe;
    },[j5visitantes]);
    return [j5visitantes,obtenerMasVisitantesJ5,hayMasPorCargarVisiJ5];
}
 
export default useObtenerVisitantesJ5SeisEquipos;