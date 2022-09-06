import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import {Titulo} from '../elementos/Header';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { IconoInicio } from './../elementos/ElementosFormularios';
import {ContenedorBoton, Formulario, Input } from './../elementos/ElementosFormularios';
import Boton from './../elementos/Boton';
import Select from 'react-select';

import ContenedorDiv from './../elementos/ContenedorDiv';

const RegistrarJugador = () => {
    const [nombre, cambiarNombre] = useState('');
    const [apellidos, cambiarApellidos] = useState('');
    const [fechanac, cambiarFechaNac] = useState('');
    const [nss, cambiarNss] = useState('');
    const [curp, cambiarCurp] = useState('');
    const [boleta, cambiarBoleta] = useState('');
    const [semestre, cambiarSemestre] = useState('');

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
   
    return ( 
        <>
        <Helmet>
            <title>Registrar Jugador</title>
        </Helmet>
        <IconoInicio icon={faFutbol}/>
        <Titulo> Registrar Jugador </Titulo> 
        <ContenedorDiv>
            <Formulario >
            
                <Input
                    type='text'
                    name='nombre'
                    placeholder='Nombre del alumno(a)'         
                />
                <Input
                    type='text'
                    name='apellidos'
                    placeholder='Apellidos del alumno(a)'          
                />
                <Input
                    type='date'
                    name='fechanac'          
                />
                    
                <Input
                    type='text'
                    name='nss'
                    placeholder='Número de seguro social del alumno(a)' 
                />
                <Input
                    type='text'
                    name='curp'
                    placeholder='CURP del alumno(a)' 
                />
                <Input
                    type='text'
                    name='boleta'
                    placeholder='Boleta del alumno(a)' 
                />
                <Input
                    type='text'
                    name='semestre'
                    placeholder='Semestre del alumno(a)' 
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