
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import {Titulo} from '../elementos/Header';
import {db} from './../firebase/firebaseConfig';

const VerJugadores = () => {

    const[input,setInput] = useState('');
    const[dato,setData] = useState([]);
    
    useEffect(() => {
       db.collection('jugadores').onSnapshot(snapshot => {
            setData(snapshot.docs.map(doc => ({id:doc.id,dato:doc.data().dato})))
       })
    },[])

    
    return ( 
        <>
        <Helmet>
            <title>Lista de Jugadores</title>
        </Helmet>
        <Titulo> Jugadores: </Titulo> 
        
        </>
     );
}
 
export default VerJugadores;