import React from 'react'
import Forms from '../../components/form/Forms'
import { Center } from '../Loginpage/Loginpage.styled'

const Registerpage = () => {
  const initialValues = {
    username: '',
    email: '',
    password: ''
  }

  const onSubmit = (values) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }

    fetch('http://localhost:3000/auth/register', requestOptions)
      .then((response) => {
        return response.json()
      }).then((data) => {
        console.log(data)
      }).catch((error) => {
        console.log('Error : ' + error)
      })
  }

  return (
    <Center>
        <Forms title='Register' initialValues={initialValues} onSubmit={onSubmit}/>
    </Center>
  )
}

export default Registerpage
