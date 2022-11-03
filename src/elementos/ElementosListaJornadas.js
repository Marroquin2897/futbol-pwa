import styled from 'styled-components';
import theme from './../theme';

const colores = {
    borde: '#0075FF',
    error: '#bb2929',
    exito: '#1ed12d',
}
const Lista = styled.ul`
    list-style: none;
    padding: 0 2.5rem; /* 40px */
    height: 100%;
    overflow-y: auto;
 
    li {
        grid-template-columns: 1fr  1fr auto;
    }
 
    @media (max-width: 50rem) { /*80px*/
        li {
            grid-template-columns: 1fr  ;
            grid-template-rows: 1fr ;
        }
    }
`;
const ElementoLista = styled.li`
    padding: 60px 0; /* 20px */
    
    display: grid;
    gap: 1px; /* 5px */
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
const Local = styled.div`
    color: #FFFFFF;
    font-weight: 500;
    font-size: 1.25rem; /* 20px */
    display: flex;
    align-items: center;
    
    svg {
        width: 3.12rem; /* 50px */
        height: auto;
        margin-right: 1.25rem; /* 20px */
        border-radius: 0.62rem; /* 10px */
    }
 
    @media (max-width: 50rem) { /* 80px */
        font-size: 1.12rem;
    }
`;
const Visitante = styled.div`
    color: #FFFFFF;
    font-weight: 500;
    font-size: 1.25rem; /* 20px */
    display: flex;
    align-items: center;
    
    svg {
        width: 3.12rem; /* 50px */
        height: auto;
        margin-right: 1.25rem; /* 20px */
        border-radius: 0.62rem; /* 10px */
    }
 
    @media (max-width: 50rem) { /* 80px */
        font-size: 1.12rem;
    }
`;
const Tabla = styled.table`
    caption-side: bottom;
    table-layout: auto; 
    width: 100%;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
`;
const Celda = styled.th`
    text-align= center;
    
    
    
`;

const TR = styled.tr`
    text-align= center;
    color= #FFFFFF;
`;
const TD = styled.td`
    text-align= center;
    color= #FFFFFF;
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

    
`;


export {
    Lista,
    ElementoLista,
    Local,
    Visitante,
    Tabla,
    Celda,
    TR,
    TD,
    Input
};