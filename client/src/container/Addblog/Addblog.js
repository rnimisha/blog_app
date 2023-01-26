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
    const requestOptions = {
      method: 'POST',
      headers: {
        authorization: `bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }

    fetch('http://localhost:3000/blogs', requestOptions)
      .then((response) => {
        return response.json()
      }).then((data) => {
        if (data.success) {
          console.log('done')
        } else {
          console.log(data.msg)
        }
      }).catch((error) => {
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
