import React from 'react'

// styles
import { Line, MiniTitle } from '../../components/card/Card.styled'
import { Container } from '../Blog/Blog.styled'
import { Category, Heading } from './IndividualBlog.styled'

const IndividualBlog = () => {
  return (
    <Container>
        <Heading>
            5 Easy Ways to Incorporate Green Beauty into Your Skincare Routine
        </Heading>
        <Category>
            Makeup
        </Category>
       <Line style={{ justifyContent: 'center' }}>
            <MiniTitle style={{ borderRight: '1px solid #999', paddingRight: '15px' }}>
                by Nimsiha
            </MiniTitle>
            <MiniTitle>
                12, 30202
            </MiniTitle>
        </Line>
    </Container>
  )
}

export default IndividualBlog
