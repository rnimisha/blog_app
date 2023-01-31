import styled from 'styled-components'
import { Field } from 'formik'
import * as palette from '../../constants/palette'

export const Dropdown = styled(Field)`
    width: 100%;
    color: #999;
    font-size: 1rem;
    font-family: inherit;
    border: 0;
    border-bottom: 2px solid ${palette.GREEN_SHADE2};
    outline: 0;
    padding: 7px 0;
    background: transparent;
`
export const FlexBox = styled.div`
    width: 100%;
    display:  flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: space-between;
`
export const Child = styled.div`
    width: ${props => props.width || '100%'};
    @media (max-width: 980px) {
        width: 100%;
    }
`
export const MiniButton = styled.button`
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    border: 2px solid ${palette.GREEN_SHADE2};
    background-color: ${palette.GREEN_SHADE2};
    font-size : 1rem;

    &:hover{
        background-color: ${palette.GREEN_SHADE4};
    }
`
