import React, {useState,useEffect} from 'react';
import { Helmet } from 'react-helmet';
import {Titulo} from '../elementos/Header';
import {ContenedorBoton, Formulario, Input } from './../elementos/ElementosFormularios';
import Boton from './../elementos/Boton';
import Alerta from './../elementos/Alerta';
import ContenedorDiv from './../elementos/ContenedorDiv';
import {useAuth} from './../contextos/AuthContext';
import Select from 'react-select';
import agregarJugador from './../firebase/agregarJugadores';
import {useNavigate} from 'react-router-dom';
import editarJugador from './../firebase/editarJugador';

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
const RegistrarJugador = ({jugador}) => {
    const [nombre, cambiarNombre] = useState('');
    const [apellidos, cambiarApellidos] = useState('');
    const [fechanac, cambiarFechaNac] = useState('');
    const [nss, cambiarNss] = useState('');
    const [curp, cambiarCurp] = useState('');
    const [boleta, cambiarBoleta] = useState('');
    const [semestre, cambiarSemestre] = useState('');
    const[estadoAlerta,cambiarEdoAlerta] = useState(false);
    const[alerta,cambiarAlerta] = useState({});
    const{usuario} = useAuth(); 
    const [escuela,cambiarEscuela] = useState('');
    const navigate = useNavigate();

    const onDropdownChangeEsc = (value) => {
        cambiarEscuela(value);
    }

    useEffect(()=> { //Comprobar que haya jugador y que sea del usuario actual
        if(jugador){

            if(jugador.data().uidUsuario === usuario.uid){
                
                cambiarNss(jugador.data().nss);
                cambiarCurp(jugador.data().curp);
                cambiarBoleta(jugador.data().boleta);
                cambiarSemestre(jugador.data().semestre);
            } else{ //Mandarlo a la lista de jugadores que si pueda editar
                navigate('/lista-jugadores');
            }
        }
    },[jugador,usuario]);

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
            case 'escuela':
                cambiarEscuela(e.target.value);
                break;      
            default:
                break;
        }
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(nombre === '' || apellidos === '' || fechanac ==='' || nss === '' || curp ===''|| boleta ==='' || semestre ==='' || escuela === '') {
            if(jugador){
                editarJugador({
                    id: jugador.id,
                    nombre: nombre,
                    apellidos: apellidos,
                    fechanac: fechanac,
                    nss: nss,
                    curp: curp,
                    boleta: boleta,
                    semestre: semestre
                }).then(()=>{
                    navigate('/lista-jugadores'); //cuando termine de editar que pase a la lista de jugadores
                }).catch((error)=> {
                    console.log(error);
                })
            } else {
                agregarJugador({
                    nombre: nombre,
                    apellidos: apellidos,
                    fechanac: fechanac,
                    nss: nss,
                    curp: curp,
                    boleta: boleta,
                    semestre: semestre,
                    escuela: escuela,
                    uidUsuario: usuario.uid
                })
                .then(()=> {
                    cambiarNombre('');
                    cambiarApellidos('');
                    cambiarFechaNac('');
                    cambiarNss('');
                    cambiarCurp('');
                    cambiarBoleta('');
                    cambiarSemestre('');
                    cambiarEscuela('');

                    cambiarEdoAlerta(true);
                    cambiarAlerta({tipo:'exito',mensaje:'Jugador registrado exitosamente'});
                })
                .catch((error)=> {
                    cambiarEdoAlerta(true);
                    cambiarAlerta({tipo:'error',mensaje:'Hubo un problema al intentar agregar al jugador'});
                });
            }  
        } else {
			cambiarEdoAlerta(true);
			cambiarAlerta({tipo: 'error', mensaje: 'Por favor rellena todos los campos.'});
		} 
        
    }

    return ( 
        <>
        <Helmet>
            <title>Registrar Jugador</title>
        </Helmet>
        
        <Titulo> Registrar Jugador </Titulo> 
        
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
                <Boton as="button" type="submit"> 
                    {jugador ? 'Editar Jugador' : 'Agregar Jugador'}
                </Boton>  
                </ContenedorBoton>

            </Formulario>
          
        <Alerta 
            tipo= {alerta.tipo}
            mensaje= {alerta.mensaje}
            estadoAlerta={estadoAlerta}
            cambiarEdoAlerta={cambiarEdoAlerta}/>  
    </>
     );
}
 
export default RegistrarJugador;