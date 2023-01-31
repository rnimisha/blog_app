import styled from 'styled-components'
import * as palette from '../../constants/palette'

export const Button = styled.button`
    font-size: clamp(1rem, 0.6111rem + 0.8889vw, 1.5rem);
    padding: 13px 50px 13px;
    outline: 0;
    border: 1px solid ${palette.BLACK_TEXT};
    cursor: pointer;
    position: relative;
    background-color: transparent;
    width: ${(props) => props.width || '250px'};
    min-height: ${(props) => props.height || '70px'};

    &:after {
        content: "";
        background-color: ${palette.GREEN_SHADE1};
        width: 100%;
        z-index: -1;
        position: absolute;
        height: 100%;
        top: 7px;
        left: 7px;
        transition: 0.2s;
    }

    &:hover::after{
        top: 0px;
        left: 0px;
    }

    @media (max-width: 400px) {
        width: 80%;
        font-size: clamp(1rem, 0.6111rem + 0.8889vw, 1rem);
    }
`
