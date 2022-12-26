import styled from 'styled-components'
import * as palette from '../../constants/palette'

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    min-height: 100vh;
`

export const LeftHeader = styled.div`
    width: 30%;
    min-height: 100vh;
    background-color: ${palette.GREEN_SHADE1};
    position: relative;

`
export const RightHeader = styled.div`
    width: 70%;
    min-height: 100vh;
`

export const MainImage = styled.div`
    position: absolute;
    width: 100%;
    right: -25%;
    top: 25%;
    height: 60%;
    background-color: ${palette.GREEN_SHADE2};
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
`
export const UnderLay = styled.div`
    position: absolute;
    min-width: 100%;
    width: 100%;
    height: 100%;
    min-height: 100%;
    top: -10%;
    right: -15%;
    background-color: ${palette.GREEN_SHADE3};
    z-index: -1;
`
