import { Firestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import {Titulo} from '../elementos/Header';


const VerJugadores = () => {

    const[data,setData] = useState();
    async function loadData(){
        try{
            const jugadores = await Firestore().colllection('jugadores').get()
            console.log(jugadores.docs);
            setData(jugadores.docs);
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
        loadData()
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