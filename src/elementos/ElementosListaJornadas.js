import styled from 'styled-components';
import theme from './../theme';

const Lista = styled.ul`
    list-style: none;
    padding: 0 2.5rem; /* 40px */
    height: 100%;
    overflow-y: auto;
 
    li {
        grid-template-columns: 1fr   auto;
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


export {
    Lista,
    ElementoLista,
    Local,
    Visitante
};