import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Forms from '../../components/form/Forms'
import { Center } from '../Loginpage/Loginpage.styled'

const Registerpage = () => {
  const navigate = useNavigate()
  const username = useSelector(state => state.user.username)

  useEffect(() => {
    // if user is in logged in state
    if (username.trim().length > 0) {
      navigate('/')
    }
  }, [])

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
