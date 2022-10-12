import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import {Titulo} from '../elementos/Header';
import ContenedorDiv from './../elementos/ContenedorDiv';
import {ContenedorBoton, Formulario, Input } from './../elementos/ElementosFormularios';
import Boton from './../elementos/Boton';
import Select from 'react-select';
import {db} from './../firebase/firebaseConfig';
import {collection, addDoc} from 'firebase/firestore';
import {Link, useNavigate} from 'react-router-dom';
import {useAuth} from './../contextos/AuthContext';

const modalidades= [
    {label: 'Fútbol 7', value:'1'},
    {label: 'Fútbol Asociación', value:'2'},
    {label: 'Fútbol Rápido', value:'3'},
]
const escuelas = [
    {label: 'CET 1 Walter Cross Buchanan', value:'I517100'},
    {label: 'CECyT No. 1 Gonzalo Vázquez Vela', value:'I501100'},
    {label: 'CECyT No. 2 Miguel Bernard', value:'I502100'},
    {label: 'CECyT No. 3 Estanislao Ramírez Ruiz', value:'I503100'},
    {label: 'CECyT No. 4 Lázaro Cárdenas', value:'I504100'},
    {label: 'CECyT No. 5 Benito Juárez', value:'I505300'},
    {label: 'CECyT No. 6 Miguel Othón de Mendizábal', value:'I506200'},
    {label: 'CECyT No. 7 Cuauhtémoc', value:'I507100'},
    {label: 'CECyT No. 8 Narciso Bassols', value:'I508100'},
    {label: 'CECyT No. 9 Juan de Dios Bátiz', value:'I509100'},
    {label: 'CECyT No. 10 Carlos Vallejo Márquez', value:'I510100'},
    {label: 'CECyT No. 11 Wilfrido Massieu', value:'I511100'},
    {label: 'CECyT No. 12 José María Morelos', value:'I512300'},
    {label: 'CECyT No. 13 Ricardo Flores Magón', value:'I513300'},
    {label: 'CECyT No. 14 Luis Enrique Erro', value:'I514300'},
    {label: 'CECyT No. 15 Diódoro Antúnez Echegaray', value:'I515200'},
    {label: 'CICS Unidad Santo Tomás', value:'09DPN0009J'},
    {label: 'CICS Unidad Milpa Alta', value:'09DPN7110T'},
    {label: 'ENCB', value:'09DPN5893Y'},
    {label: 'ENMyH', value:'09DPN0063D'},
    {label: 'ESCA Unidad Santo Tomás', value:'09DPN0050Z'},
    {label: 'ESCA Unidad Tepepan', value:'09DPN0075I'},
    {label: 'ESCOM', value:'09DPN0053X'},
    {label: 'ESE', value:'09DPN0049K'},
    {label: 'ESEO', value:'09DPN0004O'},
    {label: 'ESFM', value:'09DPN5892Z'},
    {label: 'ESIME Unidad Zacatenco', value:'09DPN5904N'},
    {label: 'ESIME Unidad Azcapotzalco', value:'09DPN0078F'},
    {label: 'ESIME Unidad Culhuacán', value:'09DPN0074J'},
    {label: 'ESIME Unidad Ticomán', value:'09DPN0022D'},
    {label: 'ESIQIE', value:'09DPN5895W'},
    {label: 'ESIT', value:'09DPN5898T'},
    {label: 'ESIA Unidad Tecamachalco', value:'15DPN0001B'},
    {label: 'ESIA Unidad Ticomán', value:'09DPN0023C'},
    {label: 'ESIA Unidad Zacatenco', value:'09DPN5901Q'},
    {label: 'ESM', value:'09DPN0365Z'},
    {label: 'EST', value:'09DPN6804V'},
    {label: 'UPIBI', value:'09DPN0003P'},
    {label: 'UPIICSA', value:'09DPN6203B'},
    {label: 'UPIITA', value:'09DPN0020F'},
]
const RegistrarEscuela = () => {
const navigate = useNavigate();
const{usuario} = useAuth();
let[escuela,cambiarEscuela] = useState('');
let [modalidad, cambiarModalidad] = useState('');
let[clave, cambiarClave] = useState('');

    const handleChange = (e) => {
        cambiarClave(e.target.value);
        
    }
    const onDropdownChange = (value) => {
        console.log(value);
        cambiarModalidad(value);
        
    }
    const onDropdownChangeEsc = (value) => {
        console.log(value);
        cambiarEscuela(value);
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        try{
           await addDoc(collection(db,'escuelas'),{
            
            clave: clave,
            escuela: escuela,
            modalidad: modalidad,
            uidUsuario: usuario.uid
        }); 
        
        } catch(error){
            console.log(error);
        }
        
        navigate('/inicio');
        cambiarClave('');
        cambiarEscuela('');
        cambiarModalidad('');
    }
    return ( 
        <>
        <Helmet>
            <title>Registrar Escuela</title>
        </Helmet>
        
        <Titulo> Registrar Escuela </Titulo> 
        <ContenedorDiv>
            <Formulario action="" onSubmit={onSubmit} >
                
                <Input
                    type='text'
                    name='clave'
                    placeholder='Ingresa clave de la escuela'
                    onChange= {handleChange}         
                /> 
                <Select
                    placeholder='Selecciona la escuela'
                    options = {escuelas}
                    onChange= {onDropdownChangeEsc}
                /> 
                <Select
                    placeholder='Modalidades a participar'
                    isMulti options = {modalidades}
                    onChange= {onDropdownChange}
                /> 
        
                <ContenedorBoton>
                    <Boton as="button" type="submit"> Registrar </Boton>
                    <Boton as={Link} to="/inicio">Regresar</Boton>  
                    <Boton as={Link} to="/registrar-jugador"> </Boton>
                </ContenedorBoton>
            </Formulario>
        </ContenedorDiv>
         
    </>
     );
}
 
export default RegistrarEscuela;