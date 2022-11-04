import {useEffect, useState} from 'react';
import {db} from './../firebase/firebaseConfig';
import { collection,query,where,startAfter,onSnapshot,orderBy } from 'firebase/firestore';

const useObtenerVisitantesJ4SeisEquipos = () => {
    const[j4visitantes,cambiarVisitantesJ4] = useState([]);
    const[ultimoVisitanteJ4,cambiarUltimoVisitanteJ4] = useState(null)
    const[hayMasPorCargarVisiJ4,cambiarHayMasPorCargarVisitanteJ4] = useState(false);

    const obtenerMasVisitantesJ4 = () => { //Mostrar el resto de equipos locales
        const consulta = query (
            collection(db,'VisitantesSeisEquipos'),
            where('Visitante','in',["4","3","2"]),
            
            startAfter(ultimoVisitanteJ4)
        );
        onSnapshot(consulta,(snapshot) => {
            if(snapshot.docs.length > 0){
                cambiarUltimoVisitanteJ4(snapshot.docs[snapshot.docs.length -1]);

                cambiarVisitantesJ3(j4visitantes.concat(snapshot.docs.map((jornada) => {
                    return{...jornada.data(), id: jornada.id}
                })))
            } else{
                cambiarHayMasPorCargarVisitanteJ4(false);
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
                cambiarUltimoVisitanteJ4(snapshot.docs[snapshot.docs.length-1]);
                cambiarHayMasPorCargarVisitanteJ4(true);
            } else{
                cambiarHayMasPorCargarVisitanteJ4(false);
            }
            cambiarVisitantesJ4(snapshot.docs.map((jornada) => {
                return{...jornada.data(), id: jornada.id}
            }));
        });
        return unsuscribe;
    },[j4visitantes]);
    return [j4visitantes,obtenerMasVisitantesJ4,hayMasPorCargarVisiJ4];
}
 
export default useObtenerVisitantesJ4SeisEquipos;