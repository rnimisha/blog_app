import styled from 'styled-components'
import * as palette from '../../constants/palette'

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    min-height: 100vh;
`

// banner left--------------------------------------------------
export const LeftHeader = styled.div`
    width: 30%;
    min-height: 100vh;
    background-color:  ${palette.GREEN_SHADE1};
    position: relative;

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

// banner right ---------------------------------------------------
export const RightHeader = styled.div`
    width: 50%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20%;
`
export const MainTitle = styled.h1`
    font-size: clamp(2.2rem, 0.6444rem + 3.5556vw, 4.2rem);
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
`
export const MiniTitle = styled.p`
    font-size: clamp(1.1rem, 0.4rem + 1.6vw, 2rem);
    font-family: 'Josefin Sans', sans-serif;
`
export const Paragraph = styled.div`
    font-size: clamp(0.7rem, 1.2056rem + -1.1556vw, 0.05rem);
    width: 52%;
    margin-top: 40px;
`
