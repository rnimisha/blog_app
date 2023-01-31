/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import useGet from '../../hooks/useGet'
import { useSelector } from 'react-redux'
import moment from 'moment'
// components
import Editor from '../../components/editor/Editor'
// styles
import { Container } from './Addblog.styles'

const Addblog = ({ type }) => {
  const navigate = useNavigate()
  const { blogid } = useParams()
  const { data, loading } = useGet(`http://localhost:3000/blogs/${blogid}`)
  const { token, username, user_id } = useSelector(state => state.user)
  const initial = {
    title: '',
    description: '',
    image: '',
    user_id,
    cat_id: '0'
  }
  const [populate, setPopulate] = useState({})

  useEffect(() => {
    if (username.trim().length === 0) {
      navigate('/login')
    }
    if (!loading && type === 'edit' && data !== null) {
      const { blog_id, title, description, image, user_id, cat_id } = data[0]
      setPopulate({
        blog_id,
        title,
        description,
        image,
        user_id,
        cat_id
      })
    }
  }, [loading, data])

  const onSubmit = (values, { resetForm }) => {
    const formData = new FormData()

    Object.keys(values).forEach(key => {
      formData.set(key, values[key])
    })
    formData.set('date', moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'))

    const method = type === 'edit' ? 'PUT' : 'POST'

    axios({
      url: 'http://localhost:3000/blogs',
      method,
      data: formData,
      headers: {
        authorization: `bearer ${token}`
      }
    })
      .then((response) => {
        if (response.data.success) {
          resetForm()
          navigate('/myblogs')
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

        type !== 'edit'
          ? <Editor initial={initial} onSubmit={onSubmit} type= {type}/>
          : loading
            ? <div>Loading....</div>
            : <Editor initial={populate} onSubmit={onSubmit} type= {type}/>
      }

    </Container>
  )
}

export default Addblog
