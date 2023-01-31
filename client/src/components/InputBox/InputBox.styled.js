import styled from 'styled-components'
import * as palette from '../../constants/palette'
import { Field } from 'formik'

export const TextBox = styled(Field)`
    font-family: inherit;
    width:  ${props => props.width || '300px'};
    border: 0;
    border-bottom: 2px solid ${palette.GREEN_SHADE2};;
    outline: 0;
    padding: 7px 0;
    background: transparent;

    @media (max-width: 980px) {
        width: 90%;
    }
`
