import {db} from './firebaseConfig';
import {doc, deleteDoc} from 'firebase/firestore';


const borrarJugador = async (id) => {
   await deleteDoc(doc(db,'jugadores',id));
}
 
export default borrarJugador;