import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Label } from 'reactstrap';
import {Titulo} from '../elementos/Header';
import {BotonCentrado, FormularioDos, InputDos,LabelMensaje } from './../elementos/ElementosFormularios';
import Boton from './../elementos/Boton';
import Alerta from './../elementos/Alerta';
import {useNavigate} from 'react-router-dom';
const NumEquipos = () => {
    const navigate = useNavigate();
    const[numEquipos, establecerNumEquipos] = useState('');
    const[estadoAlerta,cambiarEdoAlerta] = useState(false);
    const[alerta,cambiarAlerta] = useState({});

    const handleChange = (e) => {
        establecerNumEquipos(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        cambiarEdoAlerta(false);
        cambiarAlerta({});

        if(numEquipos === ''){
            cambiarEdoAlerta(true);
            cambiarAlerta({
                tipo:'error',
                mensaje:'Ingrese un valor'
            });
            return;
        }

        if(numEquipos == 6 ){
            navigate('/rol-juegos')
        }
    }
    return ( 
        <>
        <Helmet>
            <title> Generar Rol de Juegos</title>
            </Helmet>
            <Titulo> Generar Rol de Juegos </Titulo> 

            <FormularioDos onSubmit={handleSubmit}>
                <LabelMensaje> Ingresa Numero de Equipos</LabelMensaje>
                <p></p>
                <InputDos
                    type='text'
                    name='nombre'
                    placeholder='Numero de Equipos'
                    value={numEquipos}
                    onChange={handleChange}
                />
                <BotonCentrado>
                    <Boton as="button" type="submit"> Generar Rol </Boton>
                </BotonCentrado>
            </FormularioDos>
            <Alerta 
                tipo= {alerta.tipo}
                mensaje= {alerta.mensaje}
                estadoAlerta={estadoAlerta}
                cambiarEdoAlerta={cambiarEdoAlerta}
            />

        </>
     );
}
 
export default NumEquipos;