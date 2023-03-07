import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import {Titulo} from '../elementos/Header';
import Boton from './../elementos/Boton';
import {BotonCentrado, Formulario, Input,IconoInicio } from './../elementos/ElementosFormularios';
import {useNavigate} from 'react-router-dom';
import Alerta from './../elementos/Alerta';

import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

import Select from 'react-select';
import firebaseApp from "../firebase/firebaseConfig";
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

import {getFirestore,doc,setDoc} from "firebase/firestore"


const auth = getAuth(firebaseApp);
const roles= [
    {label: 'Administrador', value:'1'},
    {label: 'Jugador', value:'2'},
    {label: 'Profesor/Entrenador', value:'3'},
    {label: 'Invitado', value:'4'},
]

const Login = () => {
    const firestore = getFirestore(firebaseApp);
    const [registrarse, setRegistrarse] = useState(false);
    
    const navigate = useNavigate();
    const[nombre, establecerNombre] = useState('');
    const[apellidos, establecerApellidos] = useState('');
    const[fechaNac, establecerfechaNac] = useState('');
    const[telefono, establecerTelefono] = useState('');
    const[direccion, establecerDireccion] = useState('');
    const[boletaempleado,establecerBoletaEmpleado] = useState('');
    const[email, establecerEmail] = useState('');
    const[password, establecerPassword] = useState('');
    const[password2, establecerPassword2] = useState('');
    const[rol,cambiarRol] = useState('');
    const[estadoAlerta,cambiarEdoAlerta] = useState(false);
    const[alerta,cambiarAlerta] = useState({});

    const onDropdownChangeRol = (value) => {
        cambiarRol(value);
    }
    
    async function registrarUsuario(email, password, rol){
    
        const infoUsuario = await createUserWithEmailAndPassword(
            auth,
            email,
            password)
            .then((usuarioFirebase) => {
                return usuarioFirebase;
            });
            
            //PASAMOS EL UID PARA GUARDARLO EN LA BD(FIRESTORE)
            const docuRef = doc(firestore,`usuarios/${infoUsuario.user.uid}`);
            setDoc(docuRef,{
            nombre: nombre,
            apellidos: apellidos,
            fechaNacimiento: fechaNac,
            telefono: telefono,
            direccion: direccion,
            boleta: boletaempleado,
            correo: email,
            rol: rol
            }); 
            
            navigate('/iniciar-sesion');
    }
    
    const handleChange = (e) => {
        
        switch(e.target.name){
            case 'nombre':
                establecerNombre(e.target.value);
                break;
            case 'apellidos':
                establecerApellidos(e.target.value);
                break;
            case 'fechaNac':
                establecerfechaNac(e.target.value);
                break;
            case 'telefono':
                establecerTelefono(e.target.value);
                break; 
            case 'direccion':
                establecerDireccion(e.target.value);
                break;
            case 'boleta':
                establecerBoletaEmpleado(e.target.value);
                break;  
            case 'email':
                establecerEmail(e.target.value);
                break;
            case 'password':
                establecerPassword(e.target.value);
                break;
            case 'password2':
                establecerPassword2(e.target.value);
                break;
            case 'rol':
                cambiarRol(e.target.value);
                break;    
            default:
                break;
        }
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        //validar el correo, nombre, direccion, telefono, boleta, apellidos
        const expresionRegularCorreo = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        const expresionRegularNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
        const expresionRegularApellidos = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
        const expresionRegularTelefono = /^\d{7,14}$/;
        const expresionRegularBoleta = /^\d{7,14}$/;
        if(!expresionRegularNombre.test(nombre)){ 
            cambiarEdoAlerta(true); 
            cambiarAlerta({
                tipo: 'error',
                mensaje:'Ingrese un nombre valido'
            });
            return;
        }
        if(!expresionRegularApellidos.test(apellidos)){
            cambiarEdoAlerta(true);
            cambiarAlerta({
                tipo:'error',
                mensaje:'Apellido Paterno y Materno'
            });
            return;
        }
        if(!expresionRegularTelefono.test(telefono)){
            cambiarEdoAlerta(true);
            cambiarAlerta({
                tipo:'error',
                mensaje:'Numero con 10 digitos'
            });
            return;
        }
        if(!expresionRegularBoleta.test(boletaempleado)){
            cambiarEdoAlerta(true);
            cambiarAlerta({
                tipo:'error',
                mensaje:'Solo se permite numeros'
            });
            return;
        }

        if(!expresionRegularCorreo.test(email)){ //Si NO hay correo entonces mostramos mensaje de error
            cambiarEdoAlerta(true);
            cambiarAlerta({
                tipo: 'error',
                mensaje:'Ingresa un correo valido'
            });
            return;
        }
        //Validar que ningun campo quede vacio 
        if(nombre === '' || apellidos === '' || fechaNac === '' || telefono === '' || direccion === '' || boletaempleado === '' || email ==='' || password === '' || password2 ==='' 
        || rol ===''){ 
            cambiarEdoAlerta(true);
            cambiarAlerta({
                tipo: 'error',
                mensaje:'Completa todos los campos'
            });
            return;
        }

        //Validar que las contraseñas sean iguales
        if(password !== password2){
            cambiarEdoAlerta(true);
            cambiarAlerta({
                tipo: 'error',
                mensaje:'Las contraseñas no son iguales'
            });
            return;
        }
        
        if(registrarse){
            //Para registrarse
            registrarUsuario(email,password,rol);
        } else {
            //Iniciar sesion
            signInWithEmailAndPassword(auth,email,password);
            //navigate('/iniciar-sesion');
        }
    }
    

return(
    <>
       <Helmet>
            <title>Crear Cuenta</title>
        </Helmet>
        <IconoInicio icon={faCircleUser}/>
        <Titulo> Crear Cuenta </Titulo> 
        
        <Formulario onSubmit={handleSubmit}>
            
            <Input
                type='text'
                name='nombre'
                placeholder='Ingresa tu nombre(s)'
                value={nombre}
                onChange={handleChange}
            />
            <Input
                type='text'
                name='apellidos'
                placeholder='Ingresa tu apellido(s)'
                value={apellidos}
                onChange={handleChange}
            />
            <Input
                type='date'
                name='fechaNac'
                placeholder='Fecha de Nacimiento'
                value={fechaNac}
                onChange={handleChange}
            />
            <Input
                type='text'
                name='telefono'
                placeholder='Ingresa tu telefono 10 digitos'
                value={telefono}
                onChange={handleChange}
            />
            <Input
                type='text'
                name='direccion'
                value={direccion}
                onChange={handleChange}
                placeholder='Calle No. Ext No. Int Col. CP Municipio/Alcaldia'
            />
            <Input
                type='text'
                name='boleta'
                value={boletaempleado}
                onChange={handleChange}
                placeholder='Boleta (Alumno) o No. Empleado (Profesor)'
            />
            
            <Input
                type='email'
                name='email'
                placeholder='Ingresa tu correo'
                value={email}
                onChange={handleChange}
            />
            <Input
                type='password'
                name='password'
                placeholder='Contraseña'
                value={password}
                onChange={handleChange}
            />
            <Input
                type='password'
                name='password2'
                placeholder='Confirmar contraseña'
                value={password2}
                onChange={handleChange}
            />  
            <Select
                    placeholder='Elige rol'
                    isMulti options = {roles}
                    onChange= {onDropdownChangeRol}
                />      
            <BotonCentrado>
                <Boton as="button" type="submit" onClick={()=>setRegistrarse(!registrarse)}> Crear Cuenta </Boton> 
                <p> </p>
                <p></p>
                <Boton  to='/iniciar-sesion'> Iniciar Sesión </Boton>     
            </BotonCentrado>
        
        </Formulario> 
    </>
);
}
export default Login;

