import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
// components
import Editor from '../../components/editor/Editor'
// styles
import { Container } from './Addblog.styles'

const Addblog = () => {
  const token = useSelector(state => state.user.token)
  const initialValues = {
    title: '',
    description: '',
    image: '',
    user_id: 1,
    cat_id: '0'
  }

  const onSubmit = (values) => {
    const formData = new FormData()

    Object.keys(values).forEach(key => {
      formData.set(key, values[key])
    })

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
          console.log('done')
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
