import React from 'react'
import { Formik } from 'formik'

import InputBox from '../InputBox/InputBox'
import BoxButton from '../button/BoxButton'

import { FormContainer, Waves, Title, Container, StyledForm, MiniText } from './form.styled'
import { Link } from 'react-router-dom'

const Forms = ({ title, initialValues, onSubmit, schema }) => {
  return (
    <FormContainer>
        <Container>
          <Title>{title}</Title>
          <Formik
            initialValues={initialValues}
            validationSchema = {schema}
            onSubmit={onSubmit}
          >
          {({ errors, touched }) => (
            <StyledForm>
              {title !== 'Login' &&
               <InputBox name='email' placeholder='email' err={errors.email} touched={touched.email}/>
              }
             <InputBox name='username' placeholder='username' err={errors.username} touched={touched.username}/>
              <InputBox type='password' name='password' placeholder='password' err={errors.password} touched={touched.password}/>
              <BoxButton width='200px' height='50px' text='Submit' type ='submit' style={{ marginTop: '15px' }}/>
            </StyledForm>
          )}
          </Formik>

            {title === 'Login'
              ? <MiniText>
                Not a memeber yet? <Link to='/register'>Register Now</Link>
              </MiniText>
              : <MiniText>
                Already a member? <Link to='/login'> Login Now</Link>
              </MiniText>
            }

        </Container>
        <Waves>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ECF1E9" fillOpacity="1" d="M0,288L60,245.3C120,203,240,117,360,122.7C480,128,600,224,720,229.3C840,235,960,149,1080,112C1200,75,1320,85,1380,90.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                </path>
            </svg>
        </Waves>
    </FormContainer>
  )
}

export default Forms
