import styled from 'styled-components';
import theme from './../theme';

const colores = {
    borde: '#0075FF',
    error: '#bb2929',
    exito: '#1ed12d',
}

const Input = styled.input`
    width: 85%;
    background: #fff;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding 0 40px 0 10px;
    transition: .3s ease all;
    border: 3px solid transparent;
    align-items: center;
    &:focus{
        border: 3px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163,0.4);
    } 
`;
const InputLlave = styled.input`
    width: 50%;
    background: #fff;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding 0 40px 0 10px;
    transition: .3s ease all;
    border: 3px solid transparent;

    
`;

const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    gap: 40px;
    text-align: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 800px){
            grid-template-columns: 1fr;
        }
`;
const ElementoLista = styled.li`
    padding: 1.25rem 0; /* 20px */
    border-bottom: 2px solid #F2F2F2;
    display: grid;
    gap: 2px; /* 5px */
    justify-content: space-evenly;
 
    & > div {
        width: 100%;
        display: flex;
        align-items: center;
    }
 
    &:hover button,
    &:hover a {
        opacity: 1;
    }
`;

const LlaveLocal = styled.div`
    color: #FFFFFF;
    font-weight: 500;
    font-size: 1.25rem; /* 20px */
    display: flex;
    align-items: center;
    width: 50%;

    @media (max-width: 50rem) { /* 80px */
        font-size: 1.12rem;
    }
`;
const LlaveVisitante = styled.div`
    color: #FFFFFF;
    font-weight: 500;
    font-size: 1.25rem; /* 20px */
    display: flex;
    align-items: center;
    width: 50%;

    @media (max-width: 50rem) { /* 80px */
        font-size: 1.12rem;
    }
`;
const Lista = styled.ul`
    list-style: none;
    padding: 0 2.5rem; /* 40px */
    height: 100%;
    overflow-y: auto;
 
    li {
        grid-template-columns: 1fr  auto;
    }
 
    @media (max-width: 50rem) { /*80px*/
        li {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
        }
    }
`;

export {
    Formulario,
    Input,
    InputLlave,
    ElementoLista,
    LlaveLocal,
    LlaveVisitante,
    Lista
}