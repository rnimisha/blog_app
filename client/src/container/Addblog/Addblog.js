import React from 'react'
import Editor from '../../components/editor/Editor'
import { Container } from './Addblog.styles'

const Addblog = () => {
  const initialValues = {
    title: '',
    description: '',
    image: '',
    user_id: 1,
    cat_id: -1
  }
  const onSubmit = (values) => {
    console.log(values)
  }
  return (
    <Container>
        <Editor initialValues={initialValues} onSubmit={onSubmit}/>
    </Container>
  )
}

export default Addblog
