import styled from 'styled-components'
import { Form } from 'formik'

import * as palette from '../../constants/palette'

export const FormContainer = styled.div`
    width: 60%;
    min-height: 550px;
    padding-bottom: 0;
    text-align: center;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(70, 70, 70, 0.09);
    backdrop-filter: blur(2px);
    border: 1px solid rgba(236, 241, 233, 0.5);
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
`
export const Container = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    padding-top: 10px;
    gap: 0.5rem;
    flex-direction: column;
`
export const Title = styled.h1`
    align-self: flex-start;
    color: ${palette.GREEN_SHADE1};
    font-size: clamp(1.5rem, 0.7222rem + 1.7778vw, 2.5rem);
    width: 100%;
    margin-top: 20px;
`
export const Waves = styled.div`
    align-self:flex-end;
    width: 100%;
    height: 20%;
    border-radius: 16px;
    padding: 0;
    margin-bottom : -10px;

`
export const StyledForm = styled(Form)`
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
`
