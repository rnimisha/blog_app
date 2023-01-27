import styled from 'styled-components'
import * as palette from '../../constants/palette'

export const Heading = styled.h1`
    font-size: 2rem;
    text-align: center;
`

export const Category = styled.h2`
    overflow: hidden;
    text-align: center;
    color : ${palette.GREEN_SHADE1};

    &:before,
    &:after {
        background-color: ${palette.GREEN_SHADE1};
        content: "";
        display: inline-block;
        height: 1px;
        position: relative;
        vertical-align: middle;
        width: 50%;
    }

    &:before {
        right: 0.5em;
        margin-left: -50%;
    }

    &:after {
        left: 0.5em;
        margin-right: -50%;
    }
    
`
