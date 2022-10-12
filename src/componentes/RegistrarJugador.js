import React, {useState,useEffect} from 'react';
import { Helmet } from 'react-helmet';
import {Titulo} from '../elementos/Header';
import {ContenedorBoton, Formulario, Input } from './../elementos/ElementosFormularios';
import Boton from './../elementos/Boton';
import Alerta from './../elementos/Alerta';

import {useAuth} from './../contextos/AuthContext';

import agregarJugador from './../firebase/agregarJugadores';
import {useNavigate} from 'react-router-dom';
import editarJugador from './../firebase/editarJugador';
import {ReactComponent as IconoRegresar} from './../imagenes/regresar.svg';
import { Link } from 'react-router-dom';

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
        if(nombre === '' || apellidos === '' || fechanac ==='' || nss === '' || curp ===''|| boleta ==='' || semestre ==='') {
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
                <Boton as={Link} to='/inicio'>  <IconoRegresar/></Boton>
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