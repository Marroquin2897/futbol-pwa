import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import {Titulo} from '../elementos/Header';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { IconoInicio } from './../elementos/ElementosFormularios';
import {ContenedorBoton, Formulario, Input } from './../elementos/ElementosFormularios';
import Boton from './../elementos/Boton';
import Alerta from './../elementos/Alerta';
import ContenedorDiv from './../elementos/ContenedorDiv';
import {db} from './../firebase/firebaseConfig';
import {collection, addDoc} from 'firebase/firestore';

const RegistrarJugador = () => {
    const [nombre, cambiarNombre] = useState('');
    const [apellidos, cambiarApellidos] = useState('');
    const [fechanac, cambiarFechaNac] = useState('');
    const [nss, cambiarNss] = useState('');
    const [curp, cambiarCurp] = useState('');
    const [boleta, cambiarBoleta] = useState('');
    const [semestre, cambiarSemestre] = useState('');
    const[estadoAlerta,cambiarEdoAlerta] = useState(false);
    const[alerta,cambiarAlerta] = useState({});

    const handleChange = (e) => {
        switch(e.target.name){
            case 'nombre':
                cambiarNombre(e.target.value);
                break;
            case 'apellidos':
                cambiarApellidos(e.target.value);
                break;
            case 'fechanac':
                cambiarFechaNac(e.target.value);
                break;
            case 'nss':
                cambiarNss(e.target.value);
                break;
            case 'curp':
                cambiarCurp(e.target.value);
                break;
            case 'boleta':
                cambiarBoleta(e.target.value);
                break; 
            case 'semestre':
                cambiarSemestre(e.target.value);
                break;   
            default:
                break;
        }
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(nombre === '' || apellidos === '' || fechanac ==='' || nss === '' || curp ===''|| boleta ==='' || semestre ===''){
            cambiarEdoAlerta(true);
            cambiarAlerta({
                tipo: 'error',
                mensaje:'Completa todos los campos'
            });
            return;
        }
        try{
            await addDoc(collection(db,'jugadores'),{
                nombre:nombre,
                apellidos: apellidos,
                fechanac: fechanac,
                nss: nss,
                curp: curp,
                boleta: boleta,
                semestre: semestre
            });
        } catch(error){
            console.log('Error al registrar jugador');
        }
        cambiarNombre('');
        cambiarApellidos('');
        cambiarFechaNac('');
        cambiarNss('');
        cambiarCurp('');
        cambiarBoleta('');
        cambiarSemestre('');
    }

    return ( 
        <>
        <Helmet>
            <title>Registrar Jugador</title>
        </Helmet>
        <IconoInicio icon={faFutbol}/>
        <Titulo> Registrar Jugador </Titulo> 
        <ContenedorDiv>
            <Formulario onSubmit={handleSubmit}>
            
                <Input
                    type='text'
                    name='nombre'
                    value={nombre}
                    placeholder='Nombre del alumno(a)'  
                    onChange={handleChange}       
                />
                <Input
                    type='text'
                    name='apellidos'
                    value={apellidos}
                    placeholder='Apellidos del alumno(a)'    
                    onChange={handleChange}        
                />
                <Input
                    type='date'
                    name='fechanac'  
                    value={fechanac}     
                    onChange={handleChange}   
                />
                    
                <Input
                    type='text'
                    name='nss'
                    placeholder='Número de seguro social del alumno(a)'
                    value={nss}     
                    onChange={handleChange} 
                />
                <Input
                    type='text'
                    name='curp'
                    placeholder='CURP del alumno(a)' 
                    value={curp}     
                    onChange={handleChange} 
                />
                <Input
                    type='text'
                    name='boleta'
                    placeholder='Boleta del alumno(a)' 
                    value={boleta}     
                    onChange={handleChange} 
                />
                <Input
                    type='text'
                    name='semestre'
                    placeholder='Semestre del alumno(a)' 
                    value={semestre}     
                    onChange={handleChange} 
                />   
                <ContenedorBoton>
                <Boton as="button" type="submit"> Registrar Jugador </Boton>  
                </ContenedorBoton>

            </Formulario>
        </ContenedorDiv>    
    </>
     );
}
 
export default RegistrarJugador;