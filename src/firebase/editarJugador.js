import {db} from './firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

const editarJugador = async ({id,nombre,apellidos,fechanac,nss,curp,boleta,semestre}) => {
    const documento = doc(db,'jugadores',id);
    return await updateDoc(documento,{
        nombre: nombre,
        apellidos: apellidos,
        fechanac: fechanac,
        nss: nss,
        curp:curp,
        boleta: boleta,
        semestre: semestre,
    });  
}
 
export default editarJugador;
