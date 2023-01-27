import styled from 'styled-components'
import * as palette from '../../constants/palette'

export const Container = styled.div`
    width: 32%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 0.5rem;
    height: 550px;
    justify-content: space-between;
`
export const ImgContainer = styled.div`
    width: 100%;
    height: 70%;
    overflow: hidden;
    margin-bottom: 1rem;
`

export const Image = styled.img`
    cursor: pointer;
    width: 100%;
    height: 100%;
    transform: scale(1.11);
    transition: ease-in-out .40s;
    &:hover{
        transform: scale(1);
    }
`
export const CategoryTitle = styled.h3`
    color : ${palette.GREEN_SHADE1};
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: normal;
`
export const Title = styled.h2`
    font-size: 1.3rem;
    font-weight: normal;
    min-height: 60px;
    cursor: pointer;
`
export const Line = styled.div`
    display: inline-flex;
    gap: 1.3rem;
`
export const MiniTitle = styled.span`
    color : #999;
    font-size: 0.8rem;
`
export const HyperLink = styled.p`
    margin-top: 5px;
    color : ${palette.GREEN_SHADE1};
    font-size: 0.9rem;
    cursor: pointer;
    text-decoration: underline;

    &:hover{
        color: #000;
    }

`
