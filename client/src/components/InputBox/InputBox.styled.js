import styled from 'styled-components'
import * as palette from '../../constants/palette'
import { Field } from 'formik'

export const TextBox = styled(Field)`
    font-family: inherit;
    width:  ${props => props.width || '300px'};
    border: 0;
    border-bottom: 2px solid ${palette.GREEN_SHADE2};;
    outline: 0;
    padding-top: 7px;
    background: transparent;

    @media (max-width: 980px) {
        width: 90%;
    }
`
export const Error = styled.div`
    font-size: 0.8rem;
    color: #D8000C;
    padding: 0 ;
    margin-top: 4px ;
`
