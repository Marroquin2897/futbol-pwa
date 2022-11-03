import {useEffect, useState} from 'react';
import {db} from './../firebase/firebaseConfig';
import { collection,query,where,startAfter,onSnapshot,orderBy } from 'firebase/firestore';

const useObtenerVisitantesJ2SeisEquipos = () => {
    const[j2visitantes,cambiarVisitantesJ2] = useState([]);
    const[ultimoVisitanteJ2,cambiarUltimoVisitanteJ2] = useState(null)
    const[hayMasPorCargarVisiJ2,cambiarHayMasPorCargarVisitanteJ2] = useState(false);

    const obtenerMasVisitantesJ2 = () => { //Mostrar el resto de equipos locales
        const consulta = query (
            collection(db,'VisitantesSeisEquipos'),
            where('Visitante','in',["4","3","2"]),
            
            startAfter(ultimoVisitanteJ2)
        );
        onSnapshot(consulta,(snapshot) => {
            if(snapshot.docs.length > 0){
                cambiarUltimoVisitanteJ2(snapshot.docs[snapshot.docs.length -1]);

                cambiarVisitantesJ2(j2visitantes.concat(snapshot.docs.map((jornada) => {
                    return{...jornada.data(), id: jornada.id}
                })))
            } else{
                cambiarHayMasPorCargarVisitanteJ2(false);
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
                cambiarUltimoVisitanteJ2(snapshot.docs[snapshot.docs.length-1]);
                cambiarHayMasPorCargarVisitanteJ2(true);
            } else{
                cambiarHayMasPorCargarVisitanteJ2(false);
            }
            cambiarVisitantesJ2(snapshot.docs.map((jornada) => {
                return{...jornada.data(), id: jornada.id}
            }));
        });
        return unsuscribe;
    },[j2visitantes]);
    return [j2visitantes,obtenerMasVisitantesJ2,hayMasPorCargarVisiJ2];
}
 
export default useObtenerVisitantesJ2SeisEquipos;