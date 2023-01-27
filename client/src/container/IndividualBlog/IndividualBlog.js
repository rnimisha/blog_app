import React from 'react'
import { useParams } from 'react-router-dom'
import useGet from '../../hooks/useGet'

// styles
import { Container } from '../Blog/Blog.styled'

// components
import Description from '../../components/description/Description'

const IndividualBlog = () => {
  const { blogid } = useParams()
  const { data, loading } = useGet(`http://localhost:3000/blogs/${blogid}`)

  return (
    <Container>
        {
            loading && <div>
                loading....
            </div>
        }
        {
            data && data.length > 0 && <Description data={data[0]}/>
        }
    </Container>
  )
}

export default IndividualBlog
