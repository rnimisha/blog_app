import React from 'react'
import { getPlainText } from '../../helper/parser'

import { Heading, Category, ImageContainer, Detail } from '../../container/IndividualBlog/IndividualBlog.styled'
import { Line, MiniTitle } from '../card/Card.styled'

const Description = ({ data }) => {
  return (
    <>
        <Heading>
            { data.title}
        </Heading>
        <Category>
            {data.name}
        </Category>
        <Line style={{ justifyContent: 'center' }}>
            <MiniTitle style={{ borderRight: '1px solid #999', paddingRight: '15px', textTransform: 'uppercase' }}>
                BY {data.username}
            </MiniTitle>
            <MiniTitle>
                {data.date}
            </MiniTitle>
        </Line>
        <ImageContainer>
            <img src={`${process.env.PUBLIC_URL}/uploads/${data.image}`} style={{ maxWidth: '100%', maxHeight: '100%' }}/>
        </ImageContainer>
        <Detail>
            {getPlainText(data.description)}
        </Detail>
    </>
  )
}

export default Description
