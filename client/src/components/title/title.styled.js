import styled from 'styled-components'
import * as palette from '../../constants/palette'

export const Heading = styled.h1`
    width: 100%;
    font-size: clamp(1.5rem, 0.7222rem + 1.7778vw, 2.5rem);
    padding: 10px 0;
    text-align: center;
    color: ${palette.GREEN_SHADE0};
    font-weight: normal;
`
