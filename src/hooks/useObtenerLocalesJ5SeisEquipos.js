import {useEffect, useState} from 'react';
import {db} from './../firebase/firebaseConfig';
import { collection,query,where,startAfter,onSnapshot,orderBy } from 'firebase/firestore';

const useObtenerLocalesJ5SeisEquipos = () => {
    const[j5locales,cambiarLocalesJ5] = useState([]);
    const[ultimoLocalJ5,cambiarUltimoLocalJ5] = useState(null)
    const[hayMasPorCargarLocalJ5,cambiarHayMasPorCargarLocalJ5] = useState(false);

    const obtenerMasLocalesJ5 = () => { //Mostrar el resto de equipos locales
        const consulta = query (
            collection(db,'LocalesSeisEquipos'),
            where('Local','in',["6","5","1"]),
            
            startAfter(ultimoLocalJ5)
        );
        onSnapshot(consulta,(snapshot) => {
            if(snapshot.docs.length > 0){
                cambiarUltimoLocalJ5(snapshot.docs[snapshot.docs.length -1]);

                cambiarLocalesJ5(j5locales.concat(snapshot.docs.map((jornada) => {
                    return{...jornada.data(), id: jornada.id}
                })))
            } else{
                cambiarHayMasPorCargarLocalJ5(false);
            }
        },error => {console.log(error)});
    }
    useEffect(() => {
        const consulta = query(
            collection(db,'LocalesSeisEquipos'),
            where('Local','in',["2","3","4"]),
            
            
        );
        const unsuscribe = onSnapshot(consulta,(snapshot) => {
            if(snapshot.docs.length > 0){
                cambiarUltimoLocalJ5(snapshot.docs[snapshot.docs.length-1]);
                cambiarHayMasPorCargarLocalJ5(true);
            } else{
                cambiarHayMasPorCargarLocalJ5(false);
            }
            cambiarLocalesJ5(snapshot.docs.map((jornada) => {
                return{...jornada.data(), id: jornada.id}
            }));
        });
        return unsuscribe;
    },[j5locales]);
    return [j5locales,obtenerMasLocalesJ5,hayMasPorCargarLocalJ5];
}
 
export default useObtenerLocalesJ5SeisEquipos;