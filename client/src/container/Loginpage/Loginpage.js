import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUserDetails } from '../../features/user/userSlice'

// components
import Forms from '../../components/form/Forms'

// styles
import { Center } from './Loginpage.styled'

const Loginpage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const username = useSelector(state => state.user.username)

  useEffect(() => {
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

    fetch('http://localhost:3000/auth/login', requestOptions)
      .then((response) => {
        return response.json()
      }).then((data) => {
        if (data.success) {
          dispatch(setUserDetails(data.data))
          navigate('/')
        }
      }).catch((error) => {
        console.log('Error : ' + error)
      })
  }

  return (
    <Center>
    <Forms title='Login' initialValues={initialValues} onSubmit={onSubmit}/>
    </Center>
  )
}

export default Loginpage
