import React from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import useGet from '../../hooks/useGet'

// styles
import { Container } from '../Blog/Blog.styled'

// components
import Description from '../../components/description/Description'

const IndividualBlog = () => {
  const { blogid } = useParams()
  const { data, loading } = useGet(`http://localhost:3000/blogs/${blogid}`)

  const { token } = useSelector(state => state.user)
  const navigate = useNavigate()

  const deleteBlog = (id) => {
    axios.delete(`http://localhost:3000/blogs/${id}`, {
      headers: {
        authorization: `bearer ${token}`
      }
    }).then((response) => {
      console.log(response.data)
      if (response.data.success) {
        navigate(-1)
      } else {
        console.log(response.data.msg)
      }
    })
      .catch((error) => {
        console.log('Error : ' + error)
      })
  }

  return (
    <Container>
        {
            loading && <div>
                loading....
            </div>
        }
        {
            data && data.length > 0 && <Description data={data[0]} deleteBlog = {deleteBlog}/>
        }
    </Container>
  )
}

export default IndividualBlog
