import React from 'react'
import Card from '../../components/card/Card'
import useGet from '../../hooks/useGet'

// styles
import { BlogContainer, Container } from './Blog.styled'

const Blog = () => {
  const { data } = useGet('http://localhost:3000/blogs')
  return (
    <Container>
        <BlogContainer>
        { data && data.length > 0 &&
            data.map((item, id) => {
              return <Card key ={id} category={item.name} author={item.username} title={item.title} time={item.date} id = {item.blog_id} image={item.image}/>
            })
        }
        </BlogContainer>
    </Container>
  )
}

export default Blog
