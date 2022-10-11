import {useEffect, useState} from 'react';
import {db} from './../firebase/firebaseConfig';
import {useNavigate} from 'react-router-dom';
import {doc, getDoc} from 'firebase/firestore';

const useObtenerJugador = (id) => {
	const navigate = useNavigate();
	const [jugador, establecerJugador] = useState('');
	
	useEffect(() => { //Acceder a la BD una sola vez 
		const obtenerJugador = async() => {
			const documento = await getDoc(doc(db, 'jugadores', id));

			if(documento.exists){
				establecerJugador(documento);
			} else {	
				navigate('/lista-jugadores');
			}
		}

		obtenerJugador();
	}, [navigate, id]);

	return [jugador];
}
 
export default useObtenerJugador;