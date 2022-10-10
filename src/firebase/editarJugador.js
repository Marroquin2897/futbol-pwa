import {db} from './firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

const editarJugador = async ({id,nss,boleta,semestre}) => {
    const documento = doc(db,'jugadores',id);
    return await updateDoc(documento,{
        nss: nss,
        boleta: boleta,
        semestre: semestre,
    });  
}
 
export default editarJugador;
