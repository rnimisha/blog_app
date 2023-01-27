import React from 'react'
import { Link } from 'react-router-dom'
import { CategoryTitle, Container, HyperLink, ImgContainer, Line, MiniTitle, Title, Image } from './Card.styled'
import BANNERIMG from '../../assets/images/banner1.png'
const Card = () => {
  return (
    <Container>
        <ImgContainer>
            <Image src={BANNERIMG} alt="" />
        </ImgContainer>
        <CategoryTitle>
            Makeup
        </CategoryTitle>
        <Title>
            Beauty and Wellness Connection
        </Title>
        <Line>
            <MiniTitle style={{ borderRight: '1px solid #999', paddingRight: '15px' }}>
                by Nayeon
            </MiniTitle>
            <MiniTitle>
                Jan 23, 2023
            </MiniTitle>
        </Line>
        <Link
        to='/blogs/id'>
            <HyperLink>Read More</HyperLink>
        </Link>
    </Container>
  )
}

export default Card
