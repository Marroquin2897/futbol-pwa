import styled from "styled-components";
import theme from './../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconoInicio = styled(FontAwesomeIcon)`
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

const ContenedorFiltros = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px; /* 30px */
 
    @media(max-width: 950px){ /* 950px */
        flex-direction: column;
 
        & > * {
            width: 100%;
            margin-bottom: 10px; /* 10px */
        }
    }
`;
 
const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    
    
    @media (max-width: 800px){
            grid-template-columns: 1fr;
        }
`;

const Input = styled.input`
    width: 100%;
    text-align: center;
    size: 10px;
    background: #fff;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding 0 20px 0 10px;
    transition: .3s ease all;
    border: 3px solid transparent;
    border-bottom: 2px solid ${theme.grisClaro};
    outline: none;
    grid-column: span 2;
    @media(max-width: 950px){ /* 950px */
        font-size: 30px; /* 24px */
    }
`;
 
const InputGrande = styled(Input)`
    font-size: 50px; /* 70px */
    font-weight: bold;
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
const Selector = styled.div`

    height: 45px;
    border-radius: 3px;
    font-family: 'Ubuntu', sans-serif;
    position: relative;
    margin: '0 auto';
`;

export {ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton,IconoInicio, Selector,IconoSalida};
