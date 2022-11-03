import {useEffect, useState} from 'react';
import {db} from './../firebase/firebaseConfig';
import { collection,query,where,startAfter,onSnapshot,orderBy } from 'firebase/firestore';

const useObtenerLocalesJ2SeisEquipos = () => {
    const[j2locales,cambiarLocalesJ2] = useState([]);
    const[ultimoLocal2,cambiarUltimoLocalJ2] = useState(null)
    const[hayMasPorCargarLocalJ2,cambiarHayMasPorCargarLocalJ2] = useState(false);

    const obtenerMasLocalesJ2 = () => { //Mostrar el resto de equipos locales
        const consulta = query (
            collection(db,'LocalesSeisEquipos'),
            where('Local','in',["6","5","1"]),
            
            startAfter(ultimoLocal2)
        );
        onSnapshot(consulta,(snapshot) => {
            if(snapshot.docs.length > 0){
                cambiarUltimoLocalJ2(snapshot.docs[snapshot.docs.length -1]);

                cambiarLocalesJ2(j2locales.concat(snapshot.docs.map((jornada) => {
                    return{...jornada.data(), id: jornada.id}
                })))
            } else{
                cambiarHayMasPorCargarLocalJ2(false);
            }
        },error => {console.log(error)});
    }
    useEffect(() => {
        const consulta = query(
            collection(db,'LocalesSeisEquipos'),
            where('Local','in',["6","5","1"]),
            
            
        );
        const unsuscribe = onSnapshot(consulta,(snapshot) => {
            if(snapshot.docs.length > 0){
                cambiarUltimoLocalJ2(snapshot.docs[snapshot.docs.length-1]);
                cambiarHayMasPorCargarLocalJ2(true);
            } else{
                cambiarHayMasPorCargarLocalJ2(false);
            }
            cambiarLocalesJ2(snapshot.docs.map((jornada) => {
                return{...jornada.data(), id: jornada.id}
            }));
        });
        return unsuscribe;
    },[j2locales]);
    return [j2locales,obtenerMasLocalesJ2,hayMasPorCargarLocalJ2];
}
 
export default useObtenerLocalesJ2SeisEquipos;