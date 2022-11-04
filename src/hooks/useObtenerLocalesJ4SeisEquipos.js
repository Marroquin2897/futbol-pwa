import {useEffect, useState} from 'react';
import {db} from './../firebase/firebaseConfig';
import { collection,query,where,startAfter,onSnapshot,orderBy } from 'firebase/firestore';

const useObtenerLocalesJ4SeisEquipos = () => {
    const[j4locales,cambiarLocalesJ4] = useState([]);
    const[ultimoLocalJ4,cambiarUltimoLocalJ4] = useState(null)
    const[hayMasPorCargarLocalJ4,cambiarHayMasPorCargarLocalJ4] = useState(false);

    const obtenerMasLocalesJ4 = () => { //Mostrar el resto de equipos locales
        const consulta = query (
            collection(db,'LocalesSeisEquipos'),
            where('Local','in',["6","5","1"]),
            
            startAfter(ultimoLocalJ4)
        );
        onSnapshot(consulta,(snapshot) => {
            if(snapshot.docs.length > 0){
                cambiarUltimoLocalJ4(snapshot.docs[snapshot.docs.length -1]);

                cambiarLocalesJ4(j4locales.concat(snapshot.docs.map((jornada) => {
                    return{...jornada.data(), id: jornada.id}
                })))
            } else{
                cambiarHayMasPorCargarLocalJ4(false);
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
                cambiarUltimoLocalJ4(snapshot.docs[snapshot.docs.length-1]);
                cambiarHayMasPorCargarLocalJ4(true);
            } else{
                cambiarHayMasPorCargarLocalJ4(false);
            }
            cambiarLocalesJ4(snapshot.docs.map((jornada) => {
                return{...jornada.data(), id: jornada.id}
            }));
        });
        return unsuscribe;
    },[j4locales]);
    return [j4locales,obtenerMasLocalesJ4,hayMasPorCargarLocalJ4];
}
 
export default useObtenerLocalesJ4SeisEquipos;