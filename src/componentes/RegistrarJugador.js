import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import {Titulo} from '../elementos/Header';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { IconoInicio } from './../elementos/ElementosFormularios';
import {ContenedorBoton, Formulario, Input } from './../elementos/ElementosFormularios';
import Boton from './../elementos/Boton';
import Select from 'react-select';

import ContenedorDiv from './../elementos/ContenedorDiv';
const semestres= [
        {label: '1°', value:'1'},
        {label: '2°', value:'2'},
        {label: '3°', value:'3'},
        {label: '4°', value:'4'},
        {label: '5°', value:'5'},
        {label: '6°', value:'6'},
        {label: '7°', value:'7'},
        {label: '8°', value:'8'},
        {label: '9°', value:'9'},
        {label: '10°', value:'10'},
    ]
const RegistrarJugador = () => {
    
    const [semestre, cambiarSemestres] = useState();

    const handleSelectChange = ({value}) => {
        console.log(value);
        cambiarSemestres(value);
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
                <Select
                    placeholder='Semestre'
                    options = {semestres}
                    onChange= {handleSelectChange}
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