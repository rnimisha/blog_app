import React from 'react'
import moment from 'moment'
import { Link, useNavigate } from 'react-router-dom'
import { CategoryTitle, Container, HyperLink, ImgContainer, Line, MiniTitle, Title, Image } from './Card.styled'

const Card = ({ category, title, author, time, id, image }) => {
  const navitage = useNavigate()
  const showBlog = () => {
    navitage(`/blogs/${id}`)
  }
  return (
    <Container>
        <ImgContainer onClick={showBlog}>
            <Image src={`${process.env.PUBLIC_URL}/uploads/${image}`} alt="" />
        </ImgContainer>
        <CategoryTitle>
            {category}
        </CategoryTitle>
        <Title onClick={showBlog}>
            {title}
        </Title>
        <Line>
            <MiniTitle style={{ borderRight: '1px solid #999', paddingRight: '15px' }}>
                by {author}
            </MiniTitle>
            <MiniTitle>
                {moment(time).fromNow()}
            </MiniTitle>
        </Line>
        <Link
        to={`/blogs/${id}`}>
            <HyperLink>Read More</HyperLink>
        </Link>
    </Container>
  )
}

export default Card
