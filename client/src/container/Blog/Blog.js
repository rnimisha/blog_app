import React from 'react'
import useGet from '../../hooks/useGet'

// styles
import { Container } from './Blog.styled'

const Blog = () => {
  const { data } = useGet('http://localhost:3000/blogs')
  return (
    <Container>
        {data && data.length}
    </Container>
  )
}

export default Blog
