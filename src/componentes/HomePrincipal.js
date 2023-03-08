import React from 'react';
import firebaseApp from '../firebase/firebaseConfig';
import { getAuth,signOut } from 'firebase/auth';
import VistaAdmi from '../componentes/VistaAdministrador';
import JugadorVista from '../componentes/VistaJugador';
import {Link} from 'react-router-dom'


const auth=getAuth(firebaseApp);

function Home({user}) {
    return (  
        <>
        <p> HOME </p>

        <button onClick={()=>signOut(auth)}> Cerrar sesion</button>
        {user.rol === "administrador" ? <VistaAdmi /> : <JugadorVista />}
        </>
    );
}
 
export default Home;