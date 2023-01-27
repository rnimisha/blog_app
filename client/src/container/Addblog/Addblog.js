import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import moment from 'moment'
// components
import Editor from '../../components/editor/Editor'
// styles
import { Container } from './Addblog.styles'

const Addblog = () => {
  const navigate = useNavigate()
  const { token, username } = useSelector(state => state.user)
  useEffect(() => {
    if (username.trim().length === 0) {
      navigate('/')
    }
  }, [])

  const initialValues = {
    title: '',
    description: '',
    image: '',
    user_id: 1,
    cat_id: '0'
  }

  const onSubmit = (values, { resetForm }) => {
    const formData = new FormData()

    Object.keys(values).forEach(key => {
      formData.set(key, values[key])
    })
    formData.set('date', moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'))

    axios({
      url: 'http://localhost:3000/blogs',
      method: 'POST',
      data: formData,
      headers: {
        authorization: `bearer ${token}`
      }
    })
      .then((response) => {
        if (response.data.success) {
          resetForm()
          alert('done')
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
        <Editor initialValues={initialValues} onSubmit={onSubmit}/>
    </Container>
  )
}

export default Addblog
