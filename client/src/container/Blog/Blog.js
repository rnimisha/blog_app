import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../../components/card/Card'
import useGet from '../../hooks/useGet'
import Title from '../../components/title/Title'

// styles
import { BlogContainer, Container } from './Blog.styled'

const Blog = ({ type }) => {
  const userid = useSelector(state => state.user.user_id)
  const link = type === 'user' ? `http://localhost:3000/blogs?userid=${userid}` : 'http://localhost:3000/blogs'
  const { data } = useGet(link)
  return (
    <Container>
      <Title text={ type === 'user' ? 'My Blogs' : 'All Blogs'}/>
      <BlogContainer>
      { data && data.length > 0 &&
          data.map((item, id) => {
            return <Card key ={id} category={item.name} author={item.username} title={item.title} time={item.date} id = {item.blog_id} image={item.image} type={type}/>
          })
      }
      </BlogContainer>
    </Container>
  )
}

export default Blog
