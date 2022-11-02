import styled,{css} from "styled-components";

const colores = {
    borde: '#0075FF',
    error: '#bb2929',
    exito: '#1ed12d',
}
const InputSolo = styled.input`
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

export{InputSolo};