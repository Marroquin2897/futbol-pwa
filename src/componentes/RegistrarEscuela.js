import React, {useState,useContext} from 'react';
import { Helmet } from 'react-helmet';
import {Titulo} from '../elementos/Header';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { IconoInicio } from './../elementos/ElementosFormularios';
import ContenedorDiv from './../elementos/ContenedorDiv';
import {ContenedorBoton, Formulario, Input } from './../elementos/ElementosFormularios';
import Boton from './../elementos/Boton';
import Select from 'react-select';


const modalidades= [
    {label: 'Fútbol 7', value:'1'},
    {label: 'Fútbol Asociación', value:'2'},
    {label: 'Fútbol Rápido', value:'3'},
]
const escuelas = [
    {label: 'CECyT No. 1 Gonzalo Vázquez Vela', value:'1'},
    {label: 'CECyT No. 2 Miguel Bernard', value:'2'},
    {label: 'CECyT No. 3 Estanislao Ramírez Ruiz', value:'3'},
    {label: 'CECyT No. 4 Lázaro Cárdenas', value:'4'},
    {label: 'CECyT No. 5 Benito Juárez', value:'5'},
    {label: 'CECyT No. 6 Miguel Othón de Mendizábal', value:'6'},
    {label: 'CECyT No. 7 Cuauhtémoc', value:'7'},
    {label: 'CECyT No. 8 Narciso Bassols', value:'8'},
    {label: 'CECyT No. 9 Juan de Dios Bátiz', value:'9'},
    {label: 'CECyT No. 10 Carlos Vallejo Márquez', value:'10'},
    {label: 'CECyT No. 11 Wilfrido Massieu', value:'11'},
    {label: 'CECyT No. 12 José María Morelos', value:'12'},
    {label: 'CECyT No. 13 Ricardo Flores Magón', value:'13'},
    {label: 'CECyT No. 14 Luis Enrique Erro', value:'14'},
    {label: 'CECyT No. 15 Diódoro Antúnez Echegaray', value:'15'},
    {label: 'CECyT No. 19 Leona Vicario', value:'19'},
    {label: 'CET 1 Walter Cross Buchanan', value:'20'},
    {label: 'CICS Unidad Santo Tomás', value:'21'},
    {label: 'CICS Unidad Milpa Alta', value:'22'},
    {label: 'ENBA', value:'23'},
    {label: 'ENCB', value:'24'},
    {label: 'ENMyH', value:'25'},
    {label: 'ESCA Unidad Santo Tomás', value:'26'},
    {label: 'ESCA Unidad Tepepan', value:'27'},
    {label: 'ESCOM', value:'28'},
    {label: 'ESE', value:'29'},
    {label: 'ESEO', value:'30'},
    {label: 'ESFM', value:'31'},
    {label: 'ESIME Unidad Zacatenco', value:'32'},
    {label: 'ESIME Unidad Azcapotzalco', value:'33'},
    {label: 'ESIME Unidad Culhuacán', value:'34'},
    {label: 'ESIME Unidad Ticomán', value:'35'},
    {label: 'ESIQIE', value:'36'},
    {label: 'ESIT', value:'37'},
    {label: 'ESIA Unidad Tecamachalco', value:'38'},
    {label: 'ESIA Unidad Ticomán', value:'39'},
    {label: 'ESIA Unidad Zacatenco', value:'40'},
    {label: 'ESM', value:'41'},
    {label: 'EST', value:'42'},
    {label: 'UPIBI', value:'43'},
    {label: 'UPIICSA', value:'44'},
    {label: 'UPIITA', value:'45'},
    {label: 'UPIEM', value:'46'}
]
const RegistrarEscuela = () => {


const [modalidad, cambiarModalidad] = useState();

    const handleSelectChange = ({value}) => {
        console.log(value);
        cambiarModalidad(value);
    }
    return ( 
        <>
        <Helmet>
            <title>Registrar Escuela</title>
        </Helmet>
        <IconoInicio icon={faSchool}/>
        <Titulo> Registrar Escuela </Titulo> 
        <ContenedorDiv>
            <Formulario >
            
                <Input
                    type='text'
                    name='clave'
                    placeholder='Ingresa clave de la escuela'         
                /> 
                <Select
                    placeholder='Selecciona la escuela'
                    options = {escuelas}
                    onChange= {handleSelectChange}
                /> 
                <Select
                    placeholder='Modalidades a participar'
                    isMulti options = {modalidades}
                    onChange= {handleSelectChange}
                /> 
        
                <ContenedorBoton>
                    <Boton as="button" type="submit"> Registrar </Boton>  
                </ContenedorBoton>

            </Formulario>
        </ContenedorDiv>
         
    </>
     );
}
 
export default RegistrarEscuela;