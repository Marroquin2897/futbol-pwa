import styled from "styled-components";

const Header = styled.div` /*Para lo elementos como el boton de regresar y avanzar*/
    width: 100%;
    padding: 2.5rem; /* 40px */
    display: flex;
    justify-content: space-between;
    align-items: center;
 
    @media(max-width: 60rem){ /* 950px */
        justify-content: start;
    }
`;
 
const Titulo = styled.h2`
    margin-bottom: 10px;
    color: #FFFFFF;
    padding: 10px;
    text-align: center;
    @media(max-width: 950px){ /* 950px */
        font-size: 32px; /* 32px */
    }
`;
 
const ContenedorHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
 
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
 
const ContenedorBotones = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export {Header, Titulo, ContenedorHeader, ContenedorBotones};