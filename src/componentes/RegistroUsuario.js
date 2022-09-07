import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import {Titulo} from '../elementos/Header';
import Boton from './../elementos/Boton';
import {ContenedorBoton, Formulario, Input,IconoInicio } from './../elementos/ElementosFormularios';
import ContenedorDiv from './../elementos/ContenedorDiv';
import {auth} from './../firebase/firebaseConfig';
import {useNavigate} from 'react-router-dom';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import Alerta from './../elementos/Alerta';
import {db} from './../firebase/firebaseConfig';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { addDoc, collection } from 'firebase/firestore';



const RegistroUsuarios = () => {
    const navigate = useNavigate();
    const[nombre, establecerNombre] = useState('');
    const[apellidos, establecerApellidos] = useState('');
    const[email, establecerEmail] = useState('');
    const[password, establecerPassword] = useState('');
    const[password2, establecerPassword2] = useState('');
    const[estadoAlerta,cambiarEdoAlerta] = useState(false);
    const[alerta,cambiarAlerta] = useState({});

    const handleChange = (e) => {
        switch(e.target.name){
            case 'nombre':
                establecerNombre(e.target.value);
                break;
            case 'apellidos':
                establecerApellidos(e.target.value);
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
            default:
                break;
        }
    }

    const handleSubmit = async (e) =>{ //Para obtener los datos de los inputs
        e.preventDefault();
        cambiarEdoAlerta(false);
        cambiarAlerta({});
        //validar el correo
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if(!expresionRegular.test(email)){ //Si NO hay correo entonces mostramos mensaje de error
            cambiarEdoAlerta(true);
            cambiarAlerta({
                tipo: 'error',
                mensaje:'Ingresa un correo valido'
            });
            return;
        }

        if(nombre === '' || apellidos === '' || email ==='' || password === '' || password2 ===''){ //Validacion de que llena todos los campos
            cambiarEdoAlerta(true);
            cambiarAlerta({
                tipo: 'error',
                mensaje:'Completa todos los campos'
            });
            return;
        }

        if(password !== password2){
            cambiarEdoAlerta(true);
            cambiarAlerta({
                tipo: 'error',
                mensaje:'Las contraseñas no son iguales'
            });
            return;
        }
        //Guardar los datos en FIREBASE
        try{
           
            await createUserWithEmailAndPassword(auth,email,password);
             await addDoc(collection(db,'usuarios'),{
                nombre:nombre,
                apellidos: apellidos,
            });
           
            navigate('/iniciar-sesion');
        } catch(error){ //Mostrar los errores que puede haber en cada campo
            cambiarEdoAlerta(true);
           let mensaje;
           switch(error.code){
                case 'auth/invalid-password':
					mensaje = 'La contraseña tiene que ser de al menos 6 caracteres.'
					break;
				case 'auth/email-already-in-use':
					mensaje = 'Ya existe una cuenta con el correo electrónico proporcionado.'
				    break;
				case 'auth/invalid-email':
					mensaje = 'El correo electrónico no es válido.'
				    break;
				default:
                    
					mensaje = 'Hubo un error al intentar crear la cuenta.'
				    break;
           }
           cambiarAlerta({
            tipo:'error',
            mensaje: mensaje
           });
        }
            
    }
    return ( 
    <>
        <Helmet>
            <title>Crear Cuenta</title>
        </Helmet>
        <IconoInicio icon={faCircleUser}/>
        <Titulo> Crear Cuenta </Titulo> 
        <ContenedorDiv>
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
        
            
            <ContenedorBoton>
              <Boton as="button" type="submit"> Crear Cuenta </Boton>  
              
            </ContenedorBoton>
            
        </Formulario>

        </ContenedorDiv>
        
        <Alerta 
            tipo= {alerta.tipo}
            mensaje= {alerta.mensaje}
            estadoAlerta={estadoAlerta}
            cambiarEdoAlerta={cambiarEdoAlerta}/>
    </>
        
     );
}
 
export default RegistroUsuarios;