import styled from 'styled-components'

export const Container = styled.div`
    width: 80%;
    margin-left: 10%;
    margin-top : 3rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap : 1rem;
    @media (max-width: 860px) {
        width: 90%;
        margin-left: 5%;
    }
    @media (max-width: 680px) {
        width: 80%;
        margin-left: 10%;
    }
`
export const BlogContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 1.5rem;
     @media (max-width: 860px) {
        justify-content: center;
    }
`
