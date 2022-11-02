import {useEffect, useState} from 'react';
import {db} from './../firebase/firebaseConfig';
import { collection,query,where,startAfter,onSnapshot } from 'firebase/firestore';

const useObtenerJornadas = () => {
    const[jornadaslocales,cambiarJornadasLocales] = useState([]);
    const[ultimoLocal,cambiarUltimoLocal] = useState(null)
    const[hayMasPorCargar,cambiarHayMasPorCargar] = useState(false);

    const obtenerMasLocales = () => { //Mostrar el resto de equipos locales
        const consulta = query (
            collection(db,'LocalesSeisEquipos'),
            where('Local','in',["1","2","3"]),
            
            startAfter(ultimoLocal)
        );
        onSnapshot(consulta,(snapshot) => {
            if(snapshot.docs.length > 0){
                cambiarUltimoLocal(snapshot.docs[snapshot.docs.length -1]);

                cambiarJornadasLocales(jornadaslocales.concat(snapshot.docs.map((jornada) => {
                    return{...jornada.data(), id: jornada.id}
                })))
            } else{
                cambiarHayMasPorCargar(false);
            }
        },error => {console.log(error)});
    }
    useEffect(() => {
        const consulta = query(
            collection(db,'LocalesSeisEquipos'),
            where('Local','in',["1","2","3"]),
            
            
        );
        const unsuscribe = onSnapshot(consulta,(snapshot) => {
            if(snapshot.docs.length > 0){
                cambiarUltimoLocal(snapshot.docs[snapshot.docs.length-1]);
                cambiarHayMasPorCargar(true);
            } else{
                cambiarHayMasPorCargar(false);
            }
            cambiarJornadasLocales(snapshot.docs.map((jornada) => {
                return{...jornada.data(), id: jornada.id}
            }));
        });
        return unsuscribe;
    },[jornadaslocales]);
    return [jornadaslocales,obtenerMasLocales,hayMasPorCargar];
}
 
export default useObtenerJornadas;