import styled from 'styled-components'
import { Field } from 'formik'
import * as palette from '../../constants/palette'

export const Dropdown = styled(Field)`
    width: 100%;
    color: #999;
    font-size: 1rem;
    font-family: inherit;
    border: 0;
    border-bottom: 2px solid ${palette.GREEN_SHADE2};;
    outline: 0;
    padding: 7px 0;
    background: transparent;
`
export const FlexBox = styled.div`
    width: 100%;
    display:  flex;
    gap: 1rem;
    flex-wrap: wrap;
`
export const Child = styled.div`

    width: ${props => props.width || '100%'};
`
