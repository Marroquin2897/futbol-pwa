import {useEffect, useState} from 'react';
import {db} from './../firebase/firebaseConfig';
import { collection,query,where,startAfter,onSnapshot,orderBy } from 'firebase/firestore';

const useObtenerLocalesJ3SeisEquipos = () => {
    const[j3locales,cambiarLocalesJ3] = useState([]);
    const[ultimoLocalJ3,cambiarUltimoLocalJ3] = useState(null)
    const[hayMasPorCargarLocalJ3,cambiarHayMasPorCargarLocalJ3] = useState(false);

    const obtenerMasLocalesJ3 = () => { //Mostrar el resto de equipos locales
        const consulta = query (
            collection(db,'LocalesSeisEquipos'),
            where('Local','in',["6","5","1"]),
            
            startAfter(ultimoLocalJ3)
        );
        onSnapshot(consulta,(snapshot) => {
            if(snapshot.docs.length > 0){
                cambiarUltimoLocalJ3(snapshot.docs[snapshot.docs.length -1]);

                cambiarLocalesJ3(j2locales.concat(snapshot.docs.map((jornada) => {
                    return{...jornada.data(), id: jornada.id}
                })))
            } else{
                cambiarHayMasPorCargarLocalJ3(false);
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
                cambiarUltimoLocalJ3(snapshot.docs[snapshot.docs.length-1]);
                cambiarHayMasPorCargarLocalJ3(true);
            } else{
                cambiarHayMasPorCargarLocalJ3(false);
            }
            cambiarLocalesJ3(snapshot.docs.map((jornada) => {
                return{...jornada.data(), id: jornada.id}
            }));
        });
        return unsuscribe;
    },[j3locales]);
    return [j3locales,obtenerMasLocalesJ3,hayMasPorCargarLocalJ3];
}
 
export default useObtenerLocalesJ3SeisEquipos;