import {useEffect, useState} from 'react';
import {db} from './../firebase/firebaseConfig';
import { collection,query,where,startAfter,onSnapshot,orderBy } from 'firebase/firestore';

const useObtenerVisitantesJ3SeisEquipos = () => {
    const[j3visitantes,cambiarVisitantesJ3] = useState([]);
    const[ultimoVisitanteJ3,cambiarUltimoVisitanteJ3] = useState(null)
    const[hayMasPorCargarVisiJ3,cambiarHayMasPorCargarVisitanteJ3] = useState(false);

    const obtenerMasVisitantesJ3 = () => { //Mostrar el resto de equipos locales
        const consulta = query (
            collection(db,'VisitantesSeisEquipos'),
            where('Visitante','in',["4","3","2"]),
            
            startAfter(ultimoVisitanteJ3)
        );
        onSnapshot(consulta,(snapshot) => {
            if(snapshot.docs.length > 0){
                cambiarUltimoVisitanteJ3(snapshot.docs[snapshot.docs.length -1]);

                cambiarVisitantesJ3(j3visitantes.concat(snapshot.docs.map((jornada) => {
                    return{...jornada.data(), id: jornada.id}
                })))
            } else{
                cambiarHayMasPorCargarVisitanteJ3(false);
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
                cambiarUltimoVisitanteJ3(snapshot.docs[snapshot.docs.length-1]);
                cambiarHayMasPorCargarVisitanteJ3(true);
            } else{
                cambiarHayMasPorCargarVisitanteJ3(false);
            }
            cambiarVisitantesJ3(snapshot.docs.map((jornada) => {
                return{...jornada.data(), id: jornada.id}
            }));
        });
        return unsuscribe;
    },[j3visitantes]);
    return [j3visitantes,obtenerMasVisitantesJ3,hayMasPorCargarVisiJ3];
}
 
export default useObtenerVisitantesJ3SeisEquipos;