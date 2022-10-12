import {db} from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const agregarJugador = ({nombre,apellidos,fechanac,nss,curp,boleta,semestre,uidUsuario}) => {
    return addDoc(collection(db,'jugadores'),{
        nombre: nombre,
        apellidos: apellidos,
        fechanac: fechanac,
        nss: nss,
        curp: curp,
        boleta: boleta,
        semestre: semestre,
        
        uidUsuario: uidUsuario
    });
}
 
export default agregarJugador;
