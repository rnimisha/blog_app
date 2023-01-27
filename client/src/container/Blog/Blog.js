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
            data.map((i, id) => {
              return <Card key ={id}/>
            })
        }
        </BlogContainer>
    </Container>
  )
}

export default Blog
