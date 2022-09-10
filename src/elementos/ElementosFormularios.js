import styled,{css} from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const colores = {
    borde: '#0075FF',
    error: '#bb2929',
    exito: '#1ed12d',
}
const IconoInicio = styled(FontAwesomeIcon)`
    color: #730c0d;
    margin-left: 660px;
    z-index: 100;
    font-size: 150px;
    
    @media(max-width){
        grid-template-columns: 1fr;
    }
    `;
    const IconoSalida = styled(FontAwesomeIcon)`
    color: #560000;
    margin-left: 660px;
    z-index: 100;
    font-size: 150px;
    
    @media(max-width: 60rem){ /* 950px  Alinear los elementos cuando la pantalla se hace mas pequeña*/
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
 
        & > div {
            display: flex;
            margin-bottom: 1.25rem; /* 20px */
            justify-content: end;
        }
    }
    
    `;
    const IconoValidacion = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    bottom: 14px;
    z-index: 100;
    font-size: 16px;
    opacitiy: 0;

    ${props => props.valido === 'false' && css`
        opacity: 1;
        color: ${colores.error};
        `}
    ${props => props.valido === 'true' && css`
        opacity: 1;
        color: ${colores.exito};
        `}

    `;

 
const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media (max-width: 800px){
            grid-template-columns: 1fr;
        }
`;
const Label = styled.label`
    color: #FFFFFF;
    display: block;
    grid-template-columns: 1fr 1fr;
    font-weight: 700;
    padding: 10px;
    min-height: 40px;
    cursor: pointer;

    ${props => props.valido === 'false' && css`
        color: ${colores.error};    
    `}
`;

const GrupoInput = styled.div`
    position: relative;
    z-index: 90;
`;
const Input = styled.input`
    width: 100%;
    background: #fff;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding 0 40px 0 10px;
    transition: .3s ease all;
    border: 3px solid transparent;

    &:focus{
        border: 3px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163,0.4);
    }

    ${props => props.valido === 'true' && css`
        border: 3px solid transparent;
        `}
    ${props => props.valido === 'false' && css`
        border: 3px solid ${colores.error} !important;
        `}
`;
const LeyendaError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colores.error};
    display: none;

    ${props => props.valido === 'true' && css`
        display: none;
    `}
    ${props => props.valido === 'false' && css`
        display: block;
        `}
`;
const BotonCentrado = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: span 2;

    @media (max-width: 800px){
        grid-column: span 1;
    }
`;

const Boton = styled.button`
    height: 45px;
    line-height: 45px;
    width: 30%;
    background: #560000;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: .1s ease all;

    &:hover{
        box-shadow: 3px 0px 30px rgba(163,163,163,1);
    }
`;

const MensajeExito = styled.p`
    font-size: 14px;
    color: ${colores.exito};
    display: none;
`;
const MensajeError = styled.div`
    height: 45px;
    line-height: 45px;
    background: ${colores.error};
    padding: 0px 15px;
    border-radius: 3px;
    grid-column: span 2;
    p{
    margin: 0;
    }
    b{
    margin-left: 10px;
    }
`;

 
const ContenedorBoton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: span 2;
    gap: 20px;
    @media (max-width: 800px){
        grid-column: span 1;
    }
`;


export {
        Formulario, 
        Input, 
        ContenedorBoton,
        IconoInicio, 
        Label,
        IconoSalida,
        GrupoInput,
        LeyendaError,
        BotonCentrado,
        Boton,
        MensajeExito,
        MensajeError,
        IconoValidacion
    };
