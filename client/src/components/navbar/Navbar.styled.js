import styled from 'styled-components'
import * as palette from '../../constants/palette'

export const Nav = styled.nav`
    width : 100%;
    height: 10vh;
    background-color: #fff;
    display: flex;

`
export const LogoContainer = styled.div`
    width: 30%;
    background-color:  ${palette.GREEN_SHADE1};
    padding-left: 5%;
    display: flex;
    align-items: center;
`
export const Logo = styled.img`
    width: 160px;
    height: 100px;
    margin-top: 10px;
`
export const MenuContainer = styled.div`
    width: 70%;
    display: flex;
    justify-content: flex-end;
    padding-right: 5%;
    align-items: center;
    gap: 25px;
`
export const Item = styled.span`
    position:relative;
    z-index: 1;
    color: ${palette.BLACK_TEXT};
    font-size: clamp(0.9rem, 0.7833rem + 0.2667vw, 1.05rem);
    text-transform: uppercase;

    &:hover{
        color: ${palette.GREEN_SHADE1};
    }

    &:after {
        display: block;
        position: absolute;
        top: 0;
        left: -20%;
        bottom: 0;
        right: 0;
        margin: auto;
        width: 100%;
        height: 1px;
        content: '.';
        color: transparent;
        /* background: ${palette.GREEN_SHADE3}; */
        visibility: none;
        opacity: 0;
        z-index: -1;
        transition: all .5s;
        border-radius: 50%;
        border: 2px solid  ${palette.GREEN_SHADE1};
    }

    &:before{
         transition: all .5s;
    }

    &:hover:after {
        opacity: 1;
        visibility: visible;
        height: 200%;
        width: 140%;
    }
`
